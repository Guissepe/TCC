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
} from "./styles";

function perfil() {
  const [nomedoUsuario, SetNomedoUsuario] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <Body>
      <Header>Perfil do Usuario</Header>
      <Input
        placeholder="Nome do Usuario"
        onChangeText={(nomedoUsuario) => SetNomedoUsuario(nomedoUsuario)}
      />
      <Input
        placeholder="Cidade"
        onChangeText={(cidade) => setCidade(cidade)}
      />
      <Input
        placeholder="Bairro"
        onChangeText={(bairro) => setBairro(bairro)}
      />
      <Header />
      <Button>
        <TextinBotao>Confirmar</TextinBotao>
      </Button>
    </Body>
  );
}
export default perfil;

// function setCidade(cidade: string): void {
//   throw new Error("Function not implemented.");
// }

// function setNomedoUsuario(nomedoUsuario: string): void {
//   throw new Error("Function not implemented.");
// }

// function setBairro(bairro: string): void {
//   throw new Error("Function not implemented.");
// }
