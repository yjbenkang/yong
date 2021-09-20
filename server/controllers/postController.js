import Post from "../models/Post";
import User from "../models/User";

// Read All
export const home = async (req, res) => {
    const posts = await Post.find({}); 
    return res.json(posts);
}

// Read one
export const watch = async (req, res)=> {
  const {id} = req.params;
  const post = await Post.findById(id);
  return res.json(post);
}

// Post
export const getUploadPost = (req, res) => {
  return res.send("getUploadPost");
}

export const uploadPost = async (req, res) => {
  const isLoggedIn = req.session.loggedIn;
  if(isLoggedIn){
    const {
      user: { _id },
    } = req.session;
    if(!req.body.제목 || !req.body.내용){
      res.status(400).send('제목 혹은 내용이 입력되지 않았습니다.');
      return;
    }
    const {제목, 내용} = req.body;
  
    try{
      const newPost = await Post.create({
        제목,
        내용,
        createdAt:Date.now(),
        owner: _id,
        meta:{
          views:0,
        }
      })
      const user = await User.findById(_id);
      user.posts.push(newPost._id);
      user.save();
      return res.send("uploaded completely");
    } catch (error) {
      return res.status(400).send("에러");
    }
  } else {
    return res.status(401).send("로그인이 필요합니다.")
  }
  
  
  
};
// 나중에는 id는 데이터베이스에 의해 자동으로 할당된다.
// Input Validation
// 보안을 위해서는 절대 client가 보내는 데이터를 믿어서는 안된다.
// 따라서 예를들어 이와 같이 (1) 이름은 있어야하고, (2) 길이는 반드시 3이상이여야 한다. 라는 조건을 걸어 유효성을 검사한다.

export const getEditPost = (req, res) => {
  return res.send("getEditPost");
}

export const editPost = async (req, res) => {
  const isLoggedIn = req.session.loggedIn;
  if(isLoggedIn){
    const {
      user: { _id },
    } = req.session;
    const {id} = req.params;
    const {제목,내용} = req.body;
    const post = await Post.findById(id);
  
    if (!post) {
      return res.status(404).send("Not Found");
    }
  
    if (String(post.owner) !== String(_id)) {
      return res.status(403).send("해당 게시물의 작성자가 아닙니다.");
    }
  
    await Post.findByIdAndUpdate(id, {
      제목,
      내용
    });
    return res.json(post);
  } else {
    return res.status(401).send("로그인이 필요합니다.")
  }
};

export const deletePost = async (req, res) => {
  const loggedIn = req.session.loggedIn;
  if(loggedIn){
    const {
      user: { _id },
    } = req.session;
    const { id } = req.params;
  
    const post = await Post.findById(id);
  
    if (!post) {
      return res.status(404).send("Post not found.");
    }
    if (String(post.owner) !== String(_id)) {
      return res.status(403).send("해당 게시물의 작성자가 아닙니다.");
    }
  
    await Post.findByIdAndDelete(id);
    return res.send("post's deleted completely");
  } else {
    return res.status(401).send("로그인이 필요합니다.")
  }
  
};
