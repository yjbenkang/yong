import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


export default function Join() {
    const [status,setStatus] = useState("");
    const [disabled, setDisabled]=useState(false);
    const [values, setValues]=useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const user = {
        name: values.name,
        email:values.email,
        username: values.username,
        password: values.password,
        password2: values.password2,
        location: values.location
    }

    const handleSubmit = async (e) => {
        try{
          setDisabled(true);
          e.preventDefault();
          await axios.post(`http://localhost:4000/join`,user);
          setStatus("가입되었습니다.")
          setTimeout(() => setStatus(""), 3000);
          alert("가입이 완료되었습니다 !");
          setDisabled(false);
        } catch (err) {
          setStatus("가입할 수 없습니다.");
          console.log(err.response);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                  Name
                  <input type="text" name="name" value={values.name || ''} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={values.email || ''} onChange={handleChange} required />
                </label>
                <label>
                  Username
                  <input type="text" name="username" value={values.username || ''} onChange={handleChange} required />
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
                <label>
                  비밀번호
                  <input
                  type="password"
                  name="password2"
                  value={values.password2 || ''}
                  onChange={handleChange}
                  required
                  />
                </label>
                <label>
                  Name
                  <input type="text" name="location" value={values.location || ''} onChange={handleChange} required />
                </label>
                <button type="submit" disabled={disabled}>회원가입</button>
            </form>
            {status && <Redirect to="/" />}
        </div>
    )
}