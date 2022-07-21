import React, {useState} from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, ForgotPassword, InputPass, Inputemail} from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Localization from 'expo-localization';
// import { Conections } from './Props'
import i18n from 'i18n-js';
import translations from './Translations';



function Login() {

  // Conections(props);

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [logado, setLogado] = useState(false);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  return (
    <Body>
      <Header > Log in </Header>
    <LogInfo> {i18n.t('food')} </LogInfo>
    <Inputemail placeholder="Email"></Inputemail>
    <Text></Text>
    <InputPass  placeholder="Senha"></InputPass>
    <Text></Text>
    <ForgotPassword ><Text style={{color: 'lightgray', fontSize: 20}}>Esqueci minha senha</Text></ForgotPassword>
    <Button ><Text style={{color: 'Black', fontSize: 25, padding: 15}}> Login </Text></Button>

    <Formik
       initialValues={{ email: '', password: '' }}

       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
    >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
    </Formik>
  </Body>
  )
}


export default Login
