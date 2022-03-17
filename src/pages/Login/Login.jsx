import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";


const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  top: 6rem;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const linkToForgotPassword = {
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '.9rem',
  fontWeight: '400'
}

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('token') ? navigate('/dashboard') : '';
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    setLoggedIn(false);
    axios.post(`http://localhost:3000/login`, userData)
      .then((data) => {
        if (data.data.accessToken) {
          const token = `Bearer ${data.data.accessToken}`;
          
          if(!localStorage.getItem('token')){
            localStorage.setItem('token', JSON.stringify(token));
          }
          
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
      
        <InputContainer>
          <Input 
            type="email"
            name="email"
            value={email}
            placeholder="Email"  
            onChange={(e)=>setEmail(e.target.value)} 
          />
          
          <Input 
            type="password" 
            name="password"
            value={password}
            placeholder="Password" 
            onChange={(e)=>setPassword(e.target.value)}
          />
        </InputContainer>

        <ButtonContainer>
          <Button content="Entrar" />
        </ButtonContainer>
        
      <Link to="/forgot-password" style={linkToForgotPassword}>Esqueceu a senha ? </Link>
      
    </Form>
  );
}