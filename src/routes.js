import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import SignIn from "./pages/SignIn";
import Cadastro from "./pages/cadastrar";
import Home from "./pages/home";
import Perfil from "./pages/perfil";
import criarMesa from "./pages/criarMesa";
import procurarMesa from "./pages/procurarMesa";
import drawerMenu from "./pages/drawerMenu";
import Pericias from "./pages/pericias";

const Routes = createStackNavigator({
  SignIn,
  Cadastro,
  Home,
  Perfil,
  criarMesa,
  procurarMesa,
  drawerMenu,
  Pericias
});

const App = createAppContainer(Routes);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
