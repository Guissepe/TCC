import React, { useState } from "react";
import { Text, useWindowDimensions, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { block } from "react-native-reanimated";
import {
  Header,
  Button,
  Addbutton,
  Body,
  Slidescreen,
  AddChanges,
  ButtonText,
  ForgotPassword,
  InputPass,
  InputRname,
} from "./styles";

export default function Slider() {
  const [isActive, setSlider] = useState(false);

  const Defined = () => {
    setSlider((current) => !current);
  };
  return (
    <View>
      <View style={{ display: isActive ? "block" : "none" }}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Slidescreen>
              <Header> {i18n.t("Rotas")} </Header>
              <InputRname
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              <InputPass
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Senha"
              />
              <AddChanges onPress={() => handleSubmit()} />
            </Slidescreen>
          )}
        </Formik>
      </View>
      <View />
      <Addbutton onPress={Defined} />
    </View>
  );
}
