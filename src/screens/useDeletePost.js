import Axios from "axios";
import { useState } from "react";

export const useDeletePost = (id) => {
    const [status, setStatus] = useState("");
    const deletePost = async (e) => {
        e.preventDefault();
        try {
          await Axios.delete(`http://localhost:4000/posts/${id}/delete`);
          setStatus("게시물이 성공적으로 삭제되었습니다.");
          console.log("yes")
          setTimeout(() => setStatus(""), 3000);
        } catch (err) {
          setStatus("게시물을 삭제할 수 없습니다.");
          console.log("no")
        }
      };
    return [status,{deletePost}];
};


