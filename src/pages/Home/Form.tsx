import React, {useState} from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import { Header,
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
  } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik,  Field, ErrorMessage } from 'formik';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as yup from "yup";
import {db} from '../../../config/firebaseinitializeApp'
import { getFirestore, addDoc, getDoc, setDoc, doc  } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Mapa from '../Mapa/index'
import AppRoutes from '../../routes/app.routes';



// import { useNavigation } from '@react-navigation/native'
// import AppRoutes from '../../routes/app.routes'



// const navigation = useNavigation();



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

i18n.fallbacks = false;




export default function Form() {
  const navigate = useNavigation();

  const login = async (email: string, password: string) => {

    const auth = getAuth();

    
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('log in funcionou')
        // navigate('../')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('log in falhou')
      });

  }

  const addressSchema = yup.object().shape({
    email: yup
        .string().email().required(),
    password: yup
        .string().required(),
  });

  return (

  <Formik
    initialValues={{ email: '', password: '', }}
    validationSchema={addressSchema}
    onSubmit={values => login(values.email, values.password)}
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
        
        <Header > {i18n.t('Login')} </Header>

        <LogInfo> {i18n.t('InfoLog')} </LogInfo>

        <InputEmail
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          placeholder="Email"
        />
        <Button onPress={() => handleSubmit()}>
          {/* <Text style={{ textAlign: "center" }}>Click me</Text> */}

          <Text style={{ paddingTop: "5px", fontSize: 20 }}>Entra</Text>
        </Button>
        <InputPass
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          placeholder="Senha"
        />
        

        <Textodecriaconta>  
          <Text style={{ fontFamily: "Poppins", fontSize: 20, right: "200px" }}>
            Cria sua Conta ?
          </Text>
        </Textodecriaconta>
      </Body>
    )}
  </Formik>
  )
};

// setDoc(cityRef, { name: name, email: email }, { merge: true })
