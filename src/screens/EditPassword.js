import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Redirect } from "react-router-dom";
import validatePassword from "./validatePassword";

export const EditPassword = ({
    match: {
      params: { id }
    }
    }) => {
      const [disabled, setDisabled]=useState(false);
      const [values, setValues]=useState({});
      const [errors, setErrors] = useState({});
      const [status, setStatus] = useState();
      const loggedInUser = sessionStorage.getItem("user");
      const loggedInStatus = sessionStorage.getItem("loggedIn");

      const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
      }
      const password = {oldPassword:values.oldPassword, newPassword:values.newPassword, newPasswordConfirmation:values.newPasswordConfirmation};
      const handleSubmit = async (e) => {
        try{
            setDisabled(true);
            e.preventDefault();
            await axios.post(`http://localhost:4000/users/change-password`, password);
            setErrors(validatePassword(values));
            setStatus("게시물이 성공적으로 수정되었습니다.");
            setTimeout(() => setStatus(""), 3000);
            alert(`비밀번호가 변경되었습니다.`);
            setDisabled(false);
        } catch (err){
            alert("비밀번호를 변경할 수 없습니다.");
            setDisabled(false);
            const {data:ment} = err.response;
            setErrors(validatePassword(values,ment));

        }
    }

      return (
        <div>
            {(loggedInStatus && loggedInUser && loggedInUser === id) && 
            <>
              <form onSubmit={handleSubmit}>
                <label>
                  현재 비밀번호
                  <input type="password" name="oldPassword" value={values.oldPassword || ''} onChange={handleChange}/>
                  {errors.oldPassword && <span className="errorMessage">{errors.oldPassword}</span>}
                </label>
                <br/>
                <label>
                  새 비밀번호
                  <input
                  type="password"
                  name="newPassword"
                  value={values.newPassword || ''}
                  onChange={handleChange}
                  />
                 {errors.newPassword && <span className="errorMessage">{errors.newPassword}</span>}
                </label>
                <br/>
                <label>
                  새 비밀번호 확인
                  <input
                  type="password"
                  name="newPasswordConfirmation"
                  value={values.newPasswordConfirmation || ''}
                  onChange={handleChange}
                  />
                  {errors.newPasswordConfirmation && <span className="errorMessage">{errors.newPasswordConfirmation}</span>}
                </label>
                <br/>
                <button type="submit" disabled={disabled}>비밀번호 변경</button>
              </form>
              {status && <Redirect to="/" />}
            </>
            }
        </div>    
      )
    }