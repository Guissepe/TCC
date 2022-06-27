import React, {useState} from 'react';
import {Text} from 'react-native';
import {Header, Button, Input, LogInfo, Body, Check } from './styles'
import {TextInput } from '../Calendar/styles';
import Checkbox from 'expo-checkbox';

function Regist() {


const [logado, setLogado] = useState(false);

const regis = true


      return (
    <Body>
      <Header > Sign in </Header>
      <LogInfo> Log in to your account</LogInfo>
      <Input placeholder="Email"></Input>
      <Text></Text>
      <Input  placeholder="Senha" ></Input>
      <Text></Text>
      <TextInput type="date"/>
      <Text></Text>
      <Text> Genero </Text>
      <Text></Text>
      <Check ></Check>
      <Button ></Button>
      <Text></Text>
      </Body>
      )

  }
  export default Regist
