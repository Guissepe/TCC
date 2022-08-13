import React, { useState } from "react";
import { Formik } from "formik";
import { Text, useWindowDimensions, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Right } from "pages/Mapa/styles";
import {
  Header,
  Button,
  LogInfo,
  Body,
  ButtonText,
  InputPassword,
  InputEmail,
  InputName,
  Lan,
  Ama,
  Blue,
  Verm,
  Roxo,
  Azul,
  Verdeforte,
  Verde,
  InputdosGuri,
} from "./styles";
import * as yup from "yup";
import { getFirestore, addDoc, getDocs, setDoc, doc  } from "firebase/firestore";
import {db} from '../../../config/firebaseinitializeApp'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


i18n.translations = {
  en: {
    Login: "Login",
    InfoLog: "Enter your account here!",
    Register: "Register",
    infoReg: "Create a new account here!",
  },
  ja: {
    Login: "こんにちは",
    InfoLog: "flksajdflkasdf",
    Register: "こんにちは",
    infoReg: "flksajdflkasdf",
  },
  ptBR: {
    Login: "Login",
    InfoLog: "Entre na sua conta aqui",
    Register: "Registre se",
    infoReg: "Crie sua conta aqui",
  },
};


i18n.fallbacks = false;


export default function Form() {

  const addressSchema = yup.object().shape({
    email: yup
        .string().email().required(),
    password: yup
        .string().required(),
    name: yup
        .string().required(),
  });
  const cityRef = doc(db, 'Cidadãos', 'a');
  const auth = getAuth();

  const createUser = async (email: string, password: string) => {

    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        const user = userCredential.user;
        console.log('usuário criado')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('falha ao criar usuário')
      });
    }
  // const[isLog, setLog] = useState(false)

  return(
  <Formik
    initialValues={{ email: '', password: '' , name: ''}}
    validationSchema={addressSchema}
    onSubmit={values => {
      console.log('Criando usuário')
      createUser(values.email, values.password)}}
    // onSubmit={values => createUser()}
  >

    {({ handleChange, handleBlur, handleSubmit, errors, values }) => (

      <Body>
        <View>
          {/* eslint-disable-next-line global-require */}
          <Lan source={require("./imagem/Vector_2.png")} />
          {/* eslint-disable-next-line global-require */}
          <Ama source={require("./imagem/Vector_5.png")} />
          {/* eslint-disable-next-line global-require */}
          <Blue source={require("./imagem/Vector_6.png")} />
          {/* eslint-disable-next-line global-require */}
          <Verm source={require("./imagem/Vector_8.png")} />
          {/* eslint-disable-next-line global-require */}
          <Roxo source={require("./imagem/Vector_9.png")} />
        </View>
        <Header> {i18n.t("Register")} </Header>
        <LogInfo> {i18n.t("infoReg")} </LogInfo>
        <InputdosGuri>
          <InputName
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Nome"
          />

          <InputEmail
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email"
          />
          <InputPassword
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Senha"
          />
          <InputPassword
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Confirmar Senha"
          />
        </InputdosGuri>
        <Button style={{ top: "-100px" }} onPress={() => handleSubmit()}>
          <Text
            style={{ paddingTop: "10px", textAlign: "center", fontSize: 20 }}
          >
            Criar conta
          </Text>
        </Button>
        <View />
      </Body>
    )}
  </Formik>
  )
};



