import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pe from "pages/Perfil/Perfil";
import AppRoutes from "./app.routes";

const Drawer = createDrawerNavigator();
export const screenOptions = {
  headerStyle: {
    backgroundColor: "blue",
  },
  headerTintColor: "#ffffff",
};

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        {AppRoutes({ Drawer })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
