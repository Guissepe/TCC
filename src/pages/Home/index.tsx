import React, {useState} from 'react';
import {Text} from 'react-native';
import {Header, Button, Input, LogInfo, Body, ButtonText, ForgotPassword} from './styles'


function Login() {


const [logado, setLogado] = useState(false);

const regis = true



  return (
    <Body>
    <Header > Log in </Header>
    <LogInfo> Create a new account here!</LogInfo>
    <Input placeholder="Email"></Input>
    <Text></Text>
    <Input  placeholder="Senha" ></Input>
    <Text></Text>

    <ForgotPassword >Forgot Password?  </ForgotPassword>
    <Button ></Button>
  </Body>
  )
}


export default Login
