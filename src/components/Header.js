import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    background-color: #0b71f0;
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow: 0px 1px 10px rgba(1, 1, 1, 0.2);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 0px 50px;
`;

const HeadLine = styled.h1`
  color: white;
  font-weight: 700;
  padding-top: 30px;
`;

const List = styled.ul`
  display: flex;
  align-items:center;  
`;

const SLink = styled(Link)`
    color:white;
    margin-right: 20px;
`;

const Input = styled.input`
  display:block;
  color:white;
  background: none;
  border: none;   
  margin-right: 20px;
  font-size:15px;
  margin-top:4px;
  cursor: pointer;
`;
export default withRouter(({loggedInStatus, loggedInUser, logout, location: { pathname } }) => (
  
  <Header>
    <HeadLine>
      <SLink to={`/`}>Blog</SLink>
    </HeadLine>
    {loggedInStatus==="true" ? 
        <List>
          <SLink to={"/posts/upload"}>게시물 등록하기</SLink>
          <SLink to={`/users/${loggedInUser}`}>프로필</SLink>
          <form onSubmit={logout}>
            <Input type="submit" value="로그아웃" />
          </form>
        </List>
        :
        <List>
          <SLink to={`/login`}>로그인</SLink>
          <SLink to={`/join`}>회원가입</SLink>
        </List>
    }   
  </Header>
));
