import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;


function useLogin({ initialValues, onSubmit, validate, }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [disabled, setDisabled]=useState(false);
  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const user = {username:values.username, password:values.password};

  const handleSubmit = async (e) => {
      try{
        setDisabled(true);
        e.preventDefault();
        const {data: {loggedIn}}= await axios.post(
          `http://localhost:4000/login`,
          user,
          { withCredentials: true }
        );
        sessionStorage.setItem("loggedIn",JSON.stringify(loggedIn));
        sessionStorage.setItem("user",JSON.stringify(user.username));
        setErrors(validate(values));
        alert("로그인되었습니다 !");
        window.location.replace("/");
        setDisabled(false);
      } catch (err) {
        alert("로그인 실패 !");
        setDisabled(false);
        const {data:ment} = err.response;
        setErrors(validate(values,ment));
      }
  }

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    submitting,
    disabled,
    handleChange,
    handleSubmit
  };
}

export default useLogin;
