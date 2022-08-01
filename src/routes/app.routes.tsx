import { FC } from 'react';
import Login from 'pages/Home';
import Regist from 'pages/Regist';
import Devmenu from 'pages/devmenu';
import Mapa from 'pages/Mapa';
// import Auth from 'pages/yup';
import {PropsGroup} from './types';

const AppRoutes: FC <PropsGroup> = function ({Drawer}: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name='Login' component={Login}/>
      <Drawer.Screen name='Registro' component={Regist}/>
      <Drawer.Screen name='Mapa' component={Mapa}/>
      <Drawer.Screen name='Adicionar rota' component={Devmenu}/>
      {/* <Drawer.Screen name='test' component={Auth}/> */}
    </Drawer.Group>
  )
}

export default AppRoutes

