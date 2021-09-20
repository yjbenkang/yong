import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Redirect } from "react-router-dom";

export const EditProfile = ({
    match: {
      params: { id }
    }
    }) => {
    console.log(id);
    const [status,setStatus]=useState("");
    const [disabled, setDisabled]=useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const [values, setValues ]= useState({title:"", text:""});
    const [submitting, setSubmitting] = useState(false);

    const setInitialValue = async () => {
      try {
        const { data:user } = await axios.get(`http://localhost:4000/users/${id}`)
        console.log(user);
        setUser(user);
        setValues({name:user.name,email:user.email, username:user.username, location:user.location})
      } catch (e) {
          console.log(e.response);
      } finally {
          setLoading(false);
      }

    };

    useEffect(()=>{
      setInitialValue();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        console.log(values);
    }
    const newUser = {name:values.name, email:values.email, username:values.username, location:values.location};
    const handleSubmit = async (e) => {
        try{
            setDisabled(true);
            e.preventDefault();
            setSubmitting(true);
            await axios.post(`http://localhost:4000/users/edit`, newUser);
            setSubmitting(false);
            setStatus("프로필이 변경되었습니다.");
            setTimeout(() => setStatus(""), 3000);
            alert(`프로필이 변경되었습니다.`);
            setDisabled(false);
        } catch (err){
            setStatus("프로필을 변경할 수 없습니다.");
            console.log(err.response);
        }
    }

    return (
      <div>
         {loading && < Loader />}
         {user && 
           <div>
             {submitting &&<div>Submtting Form...</div>}
             <form onSubmit={handleSubmit}>
               <label>
                 이름
                 <input type="text" name="name" value={values.name} onChange={handleChange}/>
               </label>
               <label>
                 이메일
                 <input type="email" name="email" value={values.email} onChange={handleChange}/>
               </label>
               <label>
                 유저네임(ID)
                 <input type="text" name="username" value={values.username} onChange={handleChange}/>
               </label>
               <label>
                 활동지역
                 <input type="text" name="location" value={values.location} onChange={handleChange}/>
               </label>
               <button type="submit" disabled={disabled}>프로필 변경</button>
             </form>
           {status && <Redirect to={`/users/${id}`} />}
          </div>}
      </div>
      );
};


