import bcrypt from "bcrypt";
import User from "../models/User";

export const getJoin = (req, res) => res.send("join");
export const postJoin = async (req, res) => {
    console.log(req.body);
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

export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send("An account with this username does not exists.");
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).send("Wrong password")
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.send(req.session);
}

export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => {
    req.session.destroy();
    return res.send("Log out ");
}
export const see = (req, res) => res.send("See User");
