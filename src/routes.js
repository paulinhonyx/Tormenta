import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

<<<<<<< HEAD
import SignIn from "./pages/SignIn";
import Cadastro from "./pages/signUp";
import Home from "./pages/home";
import Perfil from "./pages/minhasMesas";
import criarMesa from "./pages/criarMesa";
import procurarMesa from "./pages/procurarMesa";
import drawerMenu from "./pages/drawerMenu";
import Pericias from "./pages/pericias";

const Routes = createStackNavigator({
  SignIn,
  Cadastro,
=======
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
>>>>>>> e4c3d71991ceb1f28c24628d090e206ac033bd50
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
