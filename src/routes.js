import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import SideBar from "./components/sideBar";

import SignIn from "./pages/signIn/signIn";
import signUp from "./pages/signUp/signUp";
import Home from "./pages/home/home";
import minhasMesas from "./pages/minhasMesas/minhasMesas";
import criarMesa from "./pages/criarMesa/criarMesa";
import procurarMesa from "./pages/procurarMesa/procurarMesa";
import vantEDesv from "./pages/vantEDesv/vantEDesv";
import fichaPrinc from "./pages/ficha/fichaPrinc";
import tiposDeDano from "./pages/tiposDeDano/tiposDeDano";
import equipamento from "./pages/equipamento/equipamento";
import magias from "./pages/magias/magias";

const DrawerNavigator = createDrawerNavigator(
  {
    fichaPrinc: { screen: fichaPrinc },
    tiposDeDano: { screen: tiposDeDano },
    equipamento: { screen: equipamento },
    magias: { screen: magias }
  },
  {
    drawerWidth: 200,
    drawerPosition: "right",
    contentComponent: props => <SideBar {...props} />
  }
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: DrawerNavigator }
  },
  {
    initialRouteName: "Home"
  }
);

const Routes = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    Home: { screen: Home },
    signUp: { screen: signUp },
    minhasMesas: { screen: minhasMesas },
    procurarMesa: { screen: procurarMesa },
    criarMesa: { screen: criarMesa },
    fichaPrinc: { screen: DrawerNavigator },
    tiposDeDano: { screen: tiposDeDano },
    equipamento: { screen: equipamento },
    magias: { screen: magias }
  },
  {
    initialRouteName: "SignIn",
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
