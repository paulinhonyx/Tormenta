import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginTop: 10
  },

  textContainer: {
    marginTop: 15,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#fff"
  },

  entrar: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#0066cc"
  },

  cadastrar: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#da552f"
  },

  header: {
    backgroundColor: "#da552f"
  },

  homeContainer: {
    width: 200,
    height: 65,
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: 100,
    backgroundColor: "#0066cc"
  },

  erroText: {
    marginLeft: 30
  },

  perfil: {
    alignSelf: "center"
  },

  viewName: {
    flexDirection: 'row'
  },

  viewName2: {
    width: 50,
    height: 50
  },

  card: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center"
  },

  viewCard: {
    alignItems: "center",
    marginTop: 15
  }
});

export default styles;
