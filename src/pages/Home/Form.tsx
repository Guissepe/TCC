import React, {useState} from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, ForgotPassword, InputPass, InputEmail} from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import i18n from 'i18n-js';
import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const addressSchema = yup.object().shape({
  email: yup
      .string().email().required(),
   password: yup
      .string().required(),
});

const auth = getAuth();

const[email, setEmail] = useState('')

const[password, setPassword] = useState('')



  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });






i18n.translations = {
  en: { Login: 'Login',
  InfoLog: 'Enter your account here!',
  Register: 'Register',
  infoReg: 'Create a new account here!'
  },
  ja: { Login: 'こんにちは',
  InfoLog: 'flksajdflkasdf',
  Register: 'こんにちは',
  infoReg: 'flksajdflkasdf'
  },
  ptBR: { Login: 'Login',
  InfoLog: 'Entre na sua conta aqui',
  Register: 'Registre se',
  infoReg: 'Crie sua conta aqui'
  },
};

i18n.fallbacks = false;

export default () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={addressSchema}
    onSubmit={values => signInWithEmailAndPassword()}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Body>
        <Header > {i18n.t('Login')} </Header>
        <LogInfo> {i18n.t('InfoLog')} </LogInfo>
        <InputEmail
          onChange={e => setEmail}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder={'Email'}
        />
          <InputPass
          onChange={p => setPassword}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder={'Senha'}
        />

        <Button onPress={() => handleSubmit()}/>

      </Body>
    )}

  </Formik>

);
