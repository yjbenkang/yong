import Axios from "axios";
import { useState } from "react";

export const useLogout = () => {
    const [status, setStatus] = useState("");
    const logout = async (e) => {
        e.preventDefault();
        try {
          await Axios.post(`http://localhost:4000/users/logout`);
          setStatus("로그아웃되었습니다.");
          console.log("logout!")
          setTimeout(() => setStatus(""), 3000);
        } catch (err) {
          setStatus("로그아웃할 수 없습니다.");
          console.log(err.response);
        }
      };
    return [status,{logout}];
};
