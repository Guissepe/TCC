
import React, { useState } from 'react';
import {Text, useWindowDimensions, Dimensions, View } from 'react-native';
import {Header, Lengbutton, Addbutton, Body, Slidescreen,AddChanges, ButtonText, ForgotPassword, InputPass, InputRname} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { block } from 'react-native-reanimated';




export default function Slider() {

  const[isActive, setSlider] = useState(false)
  const Defined = () => {
    setSlider(current => !current);
  };
  const[leActive, setConteiner] = useState(false)
  const Open = () => {
    setConteiner(state => !state);
  };

  const[buttonVal,setButton] = useState('')
  const Lenguage = () => {
    setButton(L => L);
  };


  var lenguage = buttonVal

  i18n.locale = lenguage;


  return(
    <View >
      <Addbutton onPress={Defined}></Addbutton>
        <View style={{display: isActive ? 'block' : 'none'}} >
          <Formik
            initialValues={{ptBR: 'ptBR', en: 'en', ja: 'ja'}}

            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <Slidescreen>
                <AddChanges onPress={() => handleSubmit()}/>
                {/* <InputPass
                  onChangeText={handleChange('ptBR')}
                  onBlur={handleBlur('ptBR')}
                  value={values.ptBR}
                  placeholder={'Senha'}
                /> */}
                <Addbutton onPress={() => handleSubmit()}/>

                <Addbutton/>
                <Addbutton/>
                <Lengbutton onPress={Open}/>
              </Slidescreen>
            )}

          </Formik>
        </View>
        <View style={{display: leActive ? 'block' : 'none'}} >
          <Formik
            initialValues={{ptBR: 'ptBR', en: 'en', ja: 'ja'}}

            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <Slidescreen>
                <AddChanges onPress={() => handleSubmit()}/>
                {/* <InputPass
                  onChangeText={handleChange('ptBR')}
                  onBlur={handleBlur('ptBR')}
                  value={values.ptBR}
                  placeholder={'Senha'}
                /> */}
                <Lengbutton onPress={() => handleSubmit()}/>
                <Lengbutton/>
                <Lengbutton/>
              </Slidescreen>
            )}

          </Formik>
        </View>
      <View>


      </View>
    </View>


  )
}
