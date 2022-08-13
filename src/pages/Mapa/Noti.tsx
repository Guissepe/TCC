import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

function Bora() {
  const [isActive, setSlider] = useState(false);
  const Info = () => {
    setSlider((current) => !current);
  };
  return (
    <View>
      <TouchableOpacity onPress={Info}>
        <Image
          source={require("./image/e739887a2944897c2d97ce15d186943a.png")}
          style={{
            padding: 18,
            width: 50,
            borderRadius: 1000,
            left: isActive ? "25px" : "0px",
          }}
          // style={styles.buttonImage}
        />
      </TouchableOpacity>
      <View style={{ display: isActive ? "block" : "none" }}>
        <Text>Mudança de rota</Text>
        <Image
          // eslint-disable-next-line global-require
          source={require("./image/e739887a2944897c2d97ce15d186943a.png")}
          // source={require("./image./e739887a2944897c2d97ce15d186943a.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        />
      </View>
    </View>
  );
}

export default Bora;
