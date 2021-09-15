import Axios from "axios";
import React, { useState } from "react";

export const DeletePost = (id) => {
    const [status, setStatus] = useState("");
    const deletePost = async (e) => {
        e.preventDefault();
        try {
          await Axios.delete(`http://localhost:4000/posts/${id}/delete`);
          setStatus("Post successfully deleted");
          setTimeout(() => setStatus(""), 3000);
        } catch (err) {
          setStatus("Post deletion failed");
        }
      };
    return [status,{deletePost}];
};


