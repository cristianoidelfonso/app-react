import React from 'react';
import { keyframes } from 'styled-components';
import logo from '../logo.svg';
import styled from "styled-components";

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

const NavBrand = styled.a`
  display:flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

const Li = styled.li``;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: .9rem;
  padding: 0 .5rem;
  margin: 0 .5rem;
`;


export default function Header() {
  return (
    <HeaderBox>
      
      <NavBrand href="/"><ImgLogo src={logo} alt="logo" />MyPharma</NavBrand>
      <nav>
        <Ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
        </Ul>
      </nav>
    </HeaderBox>
  )
}