import React, { useState, useEffect } from "react";
import api from "../api";

export const UploadPost = (id) => {
    const [postId,setPostId] = useState();
    { 
      제목:"ㅇ";
      내용:"ㅗㅁ"
    };
    const UploadOnePost = async () => {
        const response = await api.uploadPost(id);
        console.log(response);

    }
    return "hi";
};


