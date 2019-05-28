import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import SignIn from "./pages/signIn/signIn";
import signUp from "./pages/signUp/signUp";
import Home from "./pages/home/home";
import minhasMesas from "./pages/minhasMesas/minhasMesas";
import criarMesa from "./pages/criarMesa/criarMesa";
import procurarMesa from "./pages/procurarMesa/procurarMesa";
import vantEDesv from "./pages/vantEDesv/vantEDesv";

const Routes = createStackNavigator({
  SignIn,
  signUp,
  Home,
  minhasMesas,
  criarMesa,
  procurarMesa,
  vantEDesv
});

const App = createAppContainer(Routes);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
