import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import SideBar from "./pages/sideBar";

import Home from "./pages/home";
import SingIn from "./pages/SingIn";
import Cadastro from "./pages/cadastrar";
import Perfil from "./pages/perfil";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Perfil: { screen: Perfil }
  },
  {
    initialRouteName: "Home",
    drawerWidth: 300,
    contentComponent: props => <SideBar {...props} />
  }
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: DrawerNavigator }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const Routes = createStackNavigator(
  {
    SingIn: { screen: SingIn },
    Home: { screen: DrawerNavigator },
    Cadastro: { screen: Cadastro }
  },
  {
    initialRouteName: "SingIn",
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
