import axios from "axios";
import { useState } from "react";

export const useLogout = () => {
    const logout = async (e) => {
        e.preventDefault();
        try {
          const {data :{loggedIn}} = await axios.post(`http://localhost:4000/users/logout`);
          alert("로그아웃되었습니다!")
          sessionStorage.setItem("loggedIn",JSON.stringify(false));
          window.location.reload() 
        } catch (err) {
          console.log(err.response);
        }
      };
    return [{logout}];
};
