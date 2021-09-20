import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

axios.defaults.withCredentials = true;


export default function Login() {
    const [status,setStatus] = useState("");
    const [disabled, setDisabled]=useState(false);
    const [values, setValues]=useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const user = {username:values.username, password:values.password};

    const handleSubmit = async (e) => {
        try{
          setDisabled(true);
          e.preventDefault();
          await axios.post(
            `http://localhost:4000/login`,
            user,
            { withCredentials: true }
          );
          setStatus("로그인되었습니다.")
          setTimeout(() => setStatus(""), 3000);
          alert("로그인되었습니다 !");
          setDisabled(false);
        } catch (err) {
          setStatus("로그인할 수 없습니다.");
          console.log(err.response);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                  ID
                  <input type="text" name="username" value={values.username || ''} onChange={handleChange}/>
                </label>
                <label>
                  비밀번호
                  <input
                  type="password"
                  name="password"
                  value={values.password || ''}
                  onChange={handleChange}
                  required
                  />
                </label>
                <button type="submit" disabled={disabled}>로그인</button>
            </form>
            {status && <Redirect to="/" />}
        </div>
    )
}