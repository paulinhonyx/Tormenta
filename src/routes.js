import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from 'react-native-paper';

import Main from "./pages/main";
import Cadastro from "./pages/cadastrar";
import Principal from "./pages/primeiraTela"

const Routes =  createStackNavigator({
  Main,
  Cadastro,
  Principal
});

const App = createAppContainer(Routes);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
