
const posts= [

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
  if(!req.body.제목 || !req.body.내용){
    // 400 Bad Request
    res.status(400).send('제목 혹은 내용이 입력되지 않았습니다.');
    return;
  }
  const post = {
    id: posts.length+1,
    제목: req.body.제목,
    내용: req.body.내용
  };
  posts.push(post);
  res.json(post);
};
// 나중에는 id는 데이터베이스에 의해 자동으로 할당된다.
// Input Validation
// 보안을 위해서는 절대 client가 보내는 데이터를 믿어서는 안된다.
// 따라서 예를들어 이와 같이 (1) 이름은 있어야하고, (2) 길이는 반드시 3이상이여야 한다. 라는 조건을 걸어 유효성을 검사한다.

export const getEdit = (req,res) => {
  return;
};

export const postEdit = (req, res) => {
  const {id} = req.params;
  let post = posts.find(post => post.id === parseInt(id));
  if(!post) res.status(404).send('게시물이 존재하지 않습니다');
  post = {...req.body};

  return res.json(post);
};

export const deletePost = (req, res) => {
  const post = posts.find(post => post.id === parseInt(req.params.id));
  if(!post) return res.status(404).send('해당 게시물이 존재하지 않습니다.');

  const index = posts.indexOf(post);
  posts.splice(index, 1);

  return res.json(post);
};
