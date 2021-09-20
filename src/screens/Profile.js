import React, { useState, useEffect } from "react";
import { Redirect,Route, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { useLogout } from "./useLogout";
export default function Profile({
    match: {
      params: { id }
    }
  }){ 
    const [loading, setLoading] = useState(true);
    const [status,{logout}] = useLogout();
    const [user,setUser] = useState();
    const getUser = async () => {
      try {
        const { data: user } = await axios.get(`http://localhost:4000/users/${id}`)
        setUser(user);
      } catch (e){
        console.log(e.response);
      } finally {
          setLoading(false);
      }
    }

    useEffect(()=> {
        getUser();
        
    },[]);
    return (
      <div>
        {loading && < Loader />}
        {user &&  
          <div key={`${user._id}`}>
            <Link to="/">홈으로 &rarr;</Link>
            <h4>{user.name}</h4>
            <h3>{user.username}</h3>
            <h2>{user.email}</h2>
            <h2>{user.location}</h2>
            <form onSubmit={logout}>
            <input type="submit" value="로그아웃" />
            </form>
            {/* <Link to={`/edit`}>프로필 변경하기 &rarr;</Link> */}
            {status && <Redirect to="/" />}
          </div>
        }
      </div>
    );
}
