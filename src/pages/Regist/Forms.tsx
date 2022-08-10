import React , {useState}from 'react';
import { Formik } from 'formik';
import {Header, Button, LogInfo, Body, ButtonText, InputPassword, InputEmail, InputName} from './styles'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as yup from "yup";
import { getFirestore, addDoc, getDocs, setDoc, doc  } from "firebase/firestore";
import {db} from '../../../config/firebaseinitializeApp'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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
  // const[name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth();
  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('fuuuuuk')

      });
    }
  // const[isLog, setLog] = useState(false)

  return(
  <Formik
    initialValues={{ Email: '', Password: '' , name: ''}}
    validationSchema={addressSchema}
    onSubmit={values => createUserWithEmailAndPassword( auth, email, password)}
    // onSubmit={values => createUser()}
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
          onChange={Email => setEmail(email)}
          // onChangeText={handleChange('Email')}
          onBlur={handleBlur('email')}
          value={values.Email}
          placeholder={'Email'}
        />

          <InputPassword
          onChange={P => setPassword(password)}
          // onChangeText={handleChange('Password')}
          onBlur={handleBlur('password')}
          value={values.Password}
          placeholder={'Senha'}
        />

         <InputPassword
          onChange={P => setPassword(password)}
          // onChangeText={handleChange('Password')}
          onBlur={handleBlur('password')}
          value={values.Password}
          placeholder={'Comfirmar Senha'}
        />
        <Button onPress={() => createUser} />

      </Body>
    )}
  </Formik>
  )
};



