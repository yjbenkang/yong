import React, { useState } from "react";
import validate from "./validate";
import useLogin from "./useLogin";
import { Redirect } from "react-router-dom";



export default function Login() {
  const { values, errors, submittin, disabled, status, handleChange, handleSubmit } = useLogin({
    initialValues: { username: "", password: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate
  });

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label>
                  ID
                  <input type="text" name="username" value={values.username || ''} onChange={handleChange} className={errors.email && "errorInput"}/>
                  {errors.username && <span className="errorMessage">{errors.username}</span>}
                </label>
                <br />
                <label>
                  비밀번호
                  <input
                  type="password"
                  name="password"
                  value={values.password || ''}
                  onChange={handleChange}
                  className={errors.password && "errorInput"}
                  required
                  />
                  {errors.password && (
                  <span className="errorMessage">{errors.password}</span>
                  )}
                </label>
                <button type="submit" disabled={disabled}>로그인</button>
            </form>
            {status && <Redirect to="/" />}
        </div>
    )
}