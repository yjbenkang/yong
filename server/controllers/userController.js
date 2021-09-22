import bcrypt from "bcrypt";
import User from "../models/User";

export const getJoin = (req, res) => res.send("join");

export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body;

    if (password !== password2) {
        return res.status(400).send("Password confirmation does not match.");
    }

    const exists = await User.exists({ $or: [{ username }, { email }] });
    if (exists) {
        return res.status(400).send("This username/email is already taken.");
    }

    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        return res.send("가입이 완료되었습니다.");
    } catch (error) {
        return res.status(400).send(error._message);
    }
};

export const getLogin = (req, res) => res.send("log in");

export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).send("유저없음");
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).send("비밀번호틀림")
    }

    req.session.loggedIn = true;
    req.session.user = user;
    console.log(req.session);
    return res.send(req.session);
}

export const postEdit = async (req, res) => {
    const {
        session: {
            user: {_id},
        },
        body: {name, email, username, location}
    } = req;
    const sessionUsername = req.session.user.username;
    const sessionEmail = req.session.user.email;

    if (sessionUsername != username) {
        const usernameExists = await User.exists({ username })
        if (usernameExists) {
            return res.status(400).send("This username is already taken.");
        }
    }

    if (sessionEmail != email) {
        const emailExists = await User.exists({ email })
        if (emailExists) {
            return res.status(400).send("This email is already taken.");
        }
    }

    const updatedUser = await User.findByIdAndUpdate(_id, {
        name,
        email,
        username,
        location,
    }, { new: true });
    req.session.user = updatedUser;
    
    return res.send("프로필이 변경되었습니다.")

}

export const remove = (req, res) => res.send("Remove User");

export const logout = (req, res) => {
    req.session.destroy();
    return res.send(req.session);
}

export const see = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate({
        path: "posts",
        populate: {
            path: "owner",
            model: "User",
        },
    });
    if (!user) {
        return res.status(404).send("User not Found");
    };
    return res.json(user);
}

export const postChangePassword = async (req, res) => {
    const {
        session: {
            user: { _id },
        },
        body: { oldPassword, newPassword, newPasswordConfirmation },
    } = req;
    const user = await User.findById(_id);
    const ok = await bcrypt.compare(oldPassword, user.password);

    if (!ok) {
        return res.status(400).render("change-password", {
            pageTitle: "Change Password",
            errorMessage: "The current password is incorrect",
        });
    }

    if (newPassword !== newPasswordConfirmation) {
        return res.status(400).render("change-password", {
            pageTitle: "Change Password",
            errorMessage: "The password does not match the confirmation",
        });
    }

    user.password = newPassword;
    await user.save();
    return res.send("비밀번호가 변경되었습니다.");
}