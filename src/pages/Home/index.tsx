import React, { useState } from "react";
import { Text, useWindowDimensions, Dimensions } from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Header,
  Button,
  Input,
  LogInfo,
  Body,
  ButtonText,
  ForgotPassword,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logado, setLogado] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const regis = true;

  return (
    <Body>
      <Header> Log in </Header>
      <LogInfo> Create a new account here!</LogInfo>
      <Input placeholder="Email" onChangeText={(email) => setEmail(email)} />
      <Text />
      <Input
        placeholder="Senha"
        onChangeText={(password) => setPassword(password)}
      />
      <Text />

      <ForgotPassword>
        <Text style={{ color: "lightgray", fontSize: 20 }}>
          Esqueci minha senha
        </Text>
      </ForgotPassword>
      <Button>
        <Text style={{ color: "Black", fontSize: 25, padding: 15 }}>
          {" "}
          Login{" "}
        </Text>
      </Button>
    </Body>
  );
}

export default Login;
