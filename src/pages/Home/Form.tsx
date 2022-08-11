import React from "react";
import { Text, useWindowDimensions, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Right } from "pages/Mapa/styles";
import { color } from "react-native-reanimated";
import {
  Header,
  Button,
  LogInfo,
  Body,
  ButtonText,
  ForgotPassword,
  InputPass,
  InputEmail,
  Image,
  AiPreto,
  Aibranco,
  Texto,
  Registro,
  Textodecriaconta,
} from "./styles";
// import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

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

i18n.locale = "en";

i18n.fallbacks = true;

export default () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Body>
        <View>
          <Aibranco source={require("./imagemlogin/Vector_2.png")} />
          {/* eslint-disable-next-line global-require */}
          <AiPreto source={require("./imagemlogin/Vector_5.png")} />
          {/* eslint-disable-next-line global-require */}
          <Image source={require("./imagemlogin/Vector_12.png")} />
        </View>
        {/* <Header> {i18n.t("Login")} </Header>
        <LogInfo> {i18n.t("InfoLog")} </LogInfo> */}
        <Texto>Login</Texto>
        <InputEmail
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          placeholder="Email"
        />
        <InputPass
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          placeholder="Senha"
        />
        <Button onPress={() => handleSubmit()}>
          {/* <Text style={{ textAlign: "center" }}>Click me</Text> */}

          <Text style={{ paddingTop: "5px", fontSize: 20 }}>Entra</Text>
        </Button>
        <Textodecriaconta>
          <Text style={{ fontFamily: "Poppins", fontSize: 20, right: "200px" }}>
            Cria sua Conta ?
          </Text>
        </Textodecriaconta>
        <View />
      </Body>
    )}
  </Formik>
);
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, InputEmail, InputPass)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//  <Header > Log in </Header>
//   <LogInfo> Create a new account here!</LogInfo>
//   <Input placeholder="Email" onChangeText={(email) => setEmail(email)}></Input>
//   <Text></Text>
//   <Input  placeholder="Senha" onChangeText={(password) => setPassword(password)}></Input>
//   <Text></Text>

//   <ForgotPassword ><Text style={{color: 'lightgray', fontSize: 20}}>Esqueci minha senha</Text></ForgotPassword>
//   <Button><Text style={{color: 'Black', fontSize: 25, padding: 15}}> Login </Text></Button>

// import React, {useState} from 'react';
// import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
// import {Header, Button, LogInfo, Body, ButtonText, ForgotPassword, InputPass, Inputemail} from './styles'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Localization from 'expo-localization';
// // import { Conections } from './Props'
// import i18n from 'i18n-js';
// import translations from './Translations';

// function Login() {

//   // Conections(props);

// // const [email, setEmail] = useState("");
// // const [password, setPassword] = useState("");
// // const [logado, setLogado] = useState(false);
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

//   return (
//     <Body>
//       <Header > Log in </Header>
//     <LogInfo> {i18n.t('food')} </LogInfo>
//     <Inputemail placeholder="Email"></Inputemail>
//     <Text></Text>
//     <InputPass  placeholder="Senha"></InputPass>
//     <Text></Text>
//     <ForgotPassword ><Text style={{color: 'lightgray', fontSize: 20}}>Esqueci minha senha</Text></ForgotPassword>
//     <Button ><Text style={{color: 'Black', fontSize: 25, padding: 15}}> Login </Text></Button>

//     <Formik
//        initialValues={{ email: '', password: '' }}

//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            console.log(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//     >
//        {({ isSubmitting }) => (
//          <Form>
//            <Field type="email" name="email" />
//            <ErrorMessage name="email" component="div" />
//            <Field type="password" name="password" />
//            <ErrorMessage name="password" component="div" />
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </Form>
//        )}
//     </Formik>
//   </Body>
//   )
// }
