import React from 'react';
import logo from '../logo.svg';
import styled from "styled-components";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HeaderBox = styled.header`
  background-color: #282c34;
  min-height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ImgLogo = styled.img`
  height: 6vmin;
  pointer-events: none;
`;

const navBrand = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textDecoration: 'none'
}

export default function Header() {
  return (
    <HeaderBox>
      <Link to="/" style={navBrand}><ImgLogo src={logo} alt="logo" />MyPharma</Link>
      <Navbar />
    </HeaderBox>
  )
}