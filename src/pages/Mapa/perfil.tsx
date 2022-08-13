import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

function Dacerto() {
  const [isActive, setSlider] = useState(false);
  const Info = () => {
    setSlider((current) => !current);
  };
  return (
    <View>
      <TouchableOpacity onPress={Info}>
        <Image
          source={require("./image/download.png")}
          style={{
            padding: 18,
            width: 50,
            borderRadius: 100,
            left: isActive ? "75px" : "0px",
          }}
          // style={styles.buttonImage}
        />
      </TouchableOpacity>
      <View style={{ display: isActive ? "block" : "none" }}>
        <Text>Luizfelipebrustolin62@gmail.com</Text>
        <br />
        <Text>Luiz Felipe Brustolin</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        />
      </View>
    </View>
  );
}

export default Dacerto;
