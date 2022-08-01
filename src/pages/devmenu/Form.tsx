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



export default function Routedit() {

  return(
    <Body>

      <Slider/>

    </Body>

  )
}
