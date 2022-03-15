import React from "react";
import { Container, Box, BoxTitle, InputContainer, ButtonContainer, ForgotPassword } from "./LoginStyles";

import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login({ bgColor }) {
  return (
    <Container>
      <Box bgColor={bgColor}>
        <BoxTitle>Login</BoxTitle>
      
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>


        <ButtonContainer>
          <Button content="Entrar" />
        </ButtonContainer>
        
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      
      </Box>
      
    </Container>
  );
}