
import React, { useState } from 'react';
import {View } from 'react-native';
import {Lengbutton, Addbutton, Slidescreen} from './styles'
import { Formik} from 'formik';
import i18n from 'i18n-js';


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
