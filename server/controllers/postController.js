const posts= [
    {
      id:1,
      제목:"Hi",
      내용:"저는 강용진입니다."
    }
]
export const home = (req, res) => {
    return res.json(posts)
}