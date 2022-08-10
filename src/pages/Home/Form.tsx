import React, {useState} from 'react';
import {Header, Button, LogInfo, Body, ForgotPassword, InputPass, InputEmail} from './styles'
import { Formik, setNestedObjectValues } from 'formik';
import i18n from 'i18n-js';
import * as yup from "yup";
import {db} from '../../../config/firebaseinitializeApp'
import { getFirestore, addDoc, getDoc, setDoc, doc  } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


// import { useNavigation } from '@react-navigation/native'
// import AppRoutes from '../../routes/app.routes'


// const navigation = useNavigation();


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
  const email = 'nathangabrielvf@gmail.com'
  const password = '123456'
  const [err, seterr] = useState('')
  const navigate = useNavigation();
  const auth = getAuth();
  const [Authentic, setAuthentic] = useState(true);

  const login = async () => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  const cityRef = doc(db, 'Cidadãos', 'luiz');

  const docRef = collection(db, "Cidadãos");

  const docSnap = getDoc(cityRef);
  console.log('aqui ó')
  console.log(docSnap)
  const addressSchema = yup.object().shape({
    email: yup
        .string().email().required(),
    password: yup
        .string().required(),
  });

  return(

  <Formik
    initialValues={{ email: '', password: '', }}
    validationSchema={addressSchema}
    onSubmit={values => signInWithEmailAndPassword( auth, email, password)}
    // onSubmit={values => login()}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Body>
        <Header > {i18n.t('Login')} </Header>
        <LogInfo> {i18n.t('InfoLog')} </LogInfo>
        <InputEmail
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder={'Email'}
        />
          <InputPass
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder={'Senha'}
        />
        <Button  onPress={() => login()}/>

      </Body>
    )}
  </Formik>
  )
};

// setDoc(cityRef, { name: name, email: email }, { merge: true })
