import React, { useState } from "react";
import styled from "styled-components";

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

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
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

const ForgotPassword = styled.h4`
  cursor: pointer;
  font-size: .9rem;
  font-weight: 400;
`;

export default function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };


  return (
    <Form onSubmit={handleSubmit}>
        <Title>Criar conta</Title>
      
        <InputContainer>
          <Input 
            type="text"
            name="name"
            value={name}
            placeholder="Name"  
            onChange={(e)=>setName(e.target.value)} 
          />
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
          <Button content="Registrar" />
        </ButtonContainer>
        
        <ForgotPassword>Esqueceu a senha ?</ForgotPassword>
      
    </Form>
  );
}