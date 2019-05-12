import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import Main from "./pages/main";
import Cadastro from "./pages/cadastrar";
import Home from "./pages/home";
import Perfil from "./pages/perfil";
import criarMesa from "./pages/criarMesa";
import procurarMesa from "./pages/procurarMesa";

const Routes = createStackNavigator({
  Main,
  Cadastro,
  Home,
  Perfil,
  criarMesa,
  procurarMesa
});

const App = createAppContainer(Routes);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
