import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '.9rem',
  padding: '0 .5rem',
  margin: '0 .5rem',
}

const AuthLoginLogout = () => {
  if (!localStorage.getItem('token')) {
    return(
      <>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/register" style={linkStyle}>Register</Link></li>
      </>
    )
  } else {
    return(
      <>
        <li><Link to="/logout" style={linkStyle}>Logout</Link></li>
      </>
    )
  }
}

export default function Navbar() {
  return (
    <nav>
      <Ul>
        <AuthLoginLogout />
      </Ul>
    </nav>
  );
}