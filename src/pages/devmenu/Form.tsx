import React from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, ForgotPassword, InputPass, InputEmail} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Slider from './Addroute';
import Routes from 'routes';








// import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

i18n.translations = {
  en: {
    Login: "Login",
    InfoLog: "Enter your account here!",
    Register: "Register",
    infoReg: "Create a new account here!",
    Rotas: "Routes",
  },
  ja: {
    Login: "こんにちは",
    InfoLog: "flksajdflkasdf",
    Register: "こんにちは",
    infoReg: "flksajdflkasdf",
    Rotas: "ACHUNGJNGPIEN",
  },
  ptBR: {
    Login: "Login",
    InfoLog: "Entre na sua conta aqui",
    Register: "Registre se",
    infoReg: "Crie sua conta aqui",
    Rotas: "Rotas",
  },
};

i18n.locale = "en";

i18n.fallbacks = true;

export default function Routedit() {
  return (
    <Body>
      <Slider />
    </Body>
  );
}
