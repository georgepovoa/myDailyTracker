import React from 'react';
import { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import styled from 'styled-components';
import auth from '../components/auth/auth';


const Email = styled.a`

position: fixed;
top: 10px;
right: 10px;
color: black;
z-index: 1;



`
export default function MenuBurger(props) {
  const [currentUser,setCurrentUser] = useState();

  useEffect(() => {
      // Update the document title using the browser API
      setCurrentUser(auth.getCurrentUser)
    },[]);
  
  return (
    <>
    <Menu  >
      <a className="menu-item" href="/">
        Year
      </a>
      <a className="menu-item" href="/login">
        login
      </a>
      <a className="menu-item" href="/login" onClick={() =>auth.logout()}>
        logout
      </a>
      <a className="menu-item" href="/register">
        Register
      </a>
    </Menu>
    <Email>{currentUser?.email}</Email>
    
    </>
  );
};