import React, { useState } from "react";
import { Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Header, Button, Input, LogInfo, Body } from "./styles";
import { TextInput } from "../Calendar/styles";

function Regist() {
  const [logado, setLogado] = useState(false);

  const regis = true;

  return (
    <Body>
      <Header> Sign in </Header>
      <LogInfo> Log in to your account</LogInfo>
      <Input placeholder="Nome de usuário" />
      <Text />
      <Input placeholder="Email" />
      <Text />
      <Input placeholder="Senha" />
      <Text />
      <Input placeholder="Confirmar Senha" />
      <Text />
      <Button>
        <Text
          style={{
            color: "Black",
            fontSize: 25,
            paddingLeft: "30%",
            paddingTop: "5%",
          }}
        >
          {" "}
          Register{" "}
        </Text>
      </Button>
      <Text />
    </Body>
  );
}
export default Regist;
