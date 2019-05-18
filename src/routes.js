import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import SideBar from "./pages/sideBar";

import Main from "./pages/main";
import Cadastro from "./pages/cadastrar";
import Home from "./pages/home";
import Perfil from "./pages/perfil";
import criarMesa from "./pages/criarMesa";
import procurarMesa from "./pages/procurarMesa";
import drawerMenu from "./pages/drawerMenu";
import Ficha from "./pages/ficha";

const DrawerNavigator = createDrawerNavigator(
  {
    Main: { screen: Main },
    Perfil: { screen: Perfil }
  },
  {
    initialRouteName: Main,
    drawerWidth: 300,
    contentComponent: props => <SideBar {...props} />
  }
);

const Routes = createStackNavigator(
  {
    Main: { screen: DrawerNavigator },
    Cadastro: { screen: Cadastro }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    initialRouteName: Main,
    headerMode: "none"
  }
);

const App = createAppContainer(Routes);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
