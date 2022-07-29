import React , {useState}from 'react';
import { Formik } from 'formik';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Button, LogInfo, Body, ButtonText, InputPassword, InputEmail} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Form from './Forms';


export default function Regist() {
      return(
        <Form/>
      )
}
