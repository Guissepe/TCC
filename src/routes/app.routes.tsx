import { FC } from "react";
import Login from "pages/Home";
import Regist from "pages/Regist";
import Calendar from "pages/Calendar";
import Mapa from "pages/Mapa";
import Menu from "pages/Menu Routes";
import rotas from "pages/Mapa/Rotas";
import { PropsGroup } from "./types";

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Registro" component={Regist} />
      <Drawer.Screen name="Calendario" component={Calendar} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Menu Routes" component={Menu} />
    </Drawer.Group>
  );
};

export default AppRoutes;
