import React, {useState} from 'react';
import {Text} from 'react-native';
import {Header, Button, Input, LogInfo, Body} from './styles'
import {TextInput } from '../Calendar/styles';
import Checkbox from 'expo-checkbox';

function Regist() {


const [logado, setLogado] = useState(false);

const regis = true


      return (
    <Body>
      <Header > Sign in </Header>
      <LogInfo> Log in to your account</LogInfo>
      <Input placeholder="Nome de usuário"></Input>
      <Text></Text>
      <Input placeholder="Email"></Input>
      <Text></Text>
      <Input  placeholder="Senha" ></Input>
      <Text></Text>
      <Input  placeholder="Confirmar Senha" ></Input>
      <Text></Text>
      <Button><Text style={{color: 'Black', fontSize: 25, paddingLeft: '30%', paddingTop: '5%'}}> Register </Text></Button>
      <Text></Text>
      </Body>
      )

  }
  export default Regist
