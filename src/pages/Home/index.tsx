import React, {useState} from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, ForgotPassword, InputPass, Inputemail} from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [logado, setLogado] = useState(false);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



  return (
    <Body>
    <Formik
       initialValues={{ inputemail: '', inputPass: '' }}

       validate={values => {
         const errors = {};
         if (!values.inputemail) {
           errors.inputemail = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.inputemail)
         ) {
           errors.inputemail = 'Invalid email address';
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
        {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
          <Inputemail
          onChangeText={handleChange('Inputemail')}
          onBlur={handleBlur('Inputemail')}
          value={values.inputemail}
        />
          <InputPass
          onChangeText={handleChange('InputPass')}
          onBlur={handleBlur('InputPass')}
          value={values.InputPass}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
        )}
       {({ isSubmitting }) => (
         <Form>
            <Header > Log in </Header>
            <LogInfo> Create a new account here!</LogInfo>
            <Inputemail placeholder="Email"></Inputemail>
            <Text></Text>
            <InputPass  placeholder="Senha"></InputPass>
            <Text></Text>
            <ForgotPassword ><Text style={{color: 'lightgray', fontSize: 20}}>Esqueci minha senha</Text></ForgotPassword>
            <Button><Text style={{color: 'Black', fontSize: 25, padding: 15}}> Login </Text></Button>
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
