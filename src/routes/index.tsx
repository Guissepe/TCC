import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppRoutes from "./app.routes";

const Drawer = createDrawerNavigator();

export const screenOptions = {
  headerStyle: {
    backgroundColor: "#000810",
  },
  headerTintColor: "#fff",
};

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        {AppRoutes({ Drawer })}
      </Drawer.Navigator>
      <Drawer.Group screenOptions={screenOptions} />
    </NavigationContainer>
  );
}

export default Routes;
