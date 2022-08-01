import React, { useState } from "react";
import { Text } from "react-native";
import { Header, Button, Input, LogInfo, Body, ForgotPassword } from "./styles";

function Login() {
  const [logado, setLogado] = useState(false);

  const regis = true;

  return (
    <Body>
      <Header> Log in </Header>
      <LogInfo> Create a new account here!</LogInfo>
      <Input placeholder="Email" />
      <Text />
      <Input placeholder="Senha" />
      <Text />

      <ForgotPassword>Forgot Password? </ForgotPassword>
      <Button />
    </Body>
  );
}

export default Login;
