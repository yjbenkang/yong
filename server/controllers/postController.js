import Post from "../models/Post";
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
  if(!req.body.제목 || !req.body.내용){
    // 400 Bad Request
    res.status(400).send('제목 혹은 내용이 입력되지 않았습니다.');
    return;
  }
  const {제목, 내용} = req.body;
  await Post.create({
    제목,
    내용,
    createdAt:Date.now(),
    meta:{
      views:0,
    }
  })
  return res.send("uploaded completely");
};
// 나중에는 id는 데이터베이스에 의해 자동으로 할당된다.
// Input Validation
// 보안을 위해서는 절대 client가 보내는 데이터를 믿어서는 안된다.
// 따라서 예를들어 이와 같이 (1) 이름은 있어야하고, (2) 길이는 반드시 3이상이여야 한다. 라는 조건을 걸어 유효성을 검사한다.

export const getEditPost = (req, res) => {
  return res.send("getEditPost");
}

export const editPost = async (req, res) => {
  console.log(req.params);
  const {id} = req.params;
  const {제목,내용} = req.body;
  const post = await Post.findByIdAndUpdate(id, {
    제목,
    내용
  });
  if (!post) {
    return res.status(404).send("Not Found");
}
  return res.json(post);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  return res.send("post's deleted completely");
};
