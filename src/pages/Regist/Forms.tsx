import React , {useState}from 'react';
import { Formik } from 'formik';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, InputPassword, InputEmail, InputName} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const addressSchema = yup.object().shape({
  email: yup
      .string().email().required(),
  password: yup
      .string().required(),
  name: yup
      .string().required(),
});


const auth = getAuth();

const[isLog, setLog] = useState(false)

const[email, setEmail] = useState('')

const[password, setPassword] = useState('')

const[name, setName] = useState('')

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
    initialValues={{ email: '', password: '' , name: ''}}
    validationSchema={addressSchema}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Body>
        <Header > {i18n.t('Register')} </Header>
        <LogInfo> {i18n.t('infoReg')} </LogInfo>
        <InputName
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          placeholder={'Nome'}
        />
          <InputEmail
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder={'Email'}
        />
          <InputPassword
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder={'Senha'}
        />
          <InputPassword
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder={'Comfirmar Senha'}
        />
        <Button onPress={() => handleSubmit()}/>
      </Body>
    )}
  </Formik>
);
