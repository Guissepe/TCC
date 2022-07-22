import React, { useState } from "react";
import { Text } from "react-native";
import {
  Header,
  Button,
  Input,
  Perfil,
  Body,
  ButtonText,
  TextinBotao,
  Circulo,
  Texto
} from "./styles";

function perfil() {
  const [nomedoUsuario, SetNomedoUsuario] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <Body>

      {/* <Header>Perfil do Usuario</Header> */}
      <Circulo/>
      <Texto style={{ color: "lightgray", fontSize: 50 }}>
         Nome
        </Texto>
        <Texto style={{ color: "lightgray", fontSize: 50}}>
         Email
        </Texto>

      <Header />
      <Button>
        <TextinBotao>Confirmar</TextinBotao>
      </Button>

    </Body>

  );
}
export default perfil
