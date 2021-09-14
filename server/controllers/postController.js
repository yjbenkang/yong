const posts= [
    {
      id:1,
      제목:"Hi",
      내용:"저는 강용진입니다."
    }
]

// Read All
export const home = (req, res) => {
    return res.json(posts)
}

// Read one
export const watch = (req, res)=> {
  const {id} = req.params;
  const post = posts[id-1];
  return res.json(post);
}

// Post
export const getUpload = (req, res) => {

};

export const postUpload = (req, res) => {
  const post = {
    id: posts.length+1,
    제목: req.body.제목,
    내용: req.body.내용
  };
  console.log(post);
  posts.push(post);
  res.json(post);
};