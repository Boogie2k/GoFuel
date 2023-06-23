import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require("./assets/welcomei.png")} />
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.text}>
        We trust you to deliver our products to our clients safely and on time.
      </Text>
      <View style={styles.forms}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Login", { name: "Jane" })}
          style={styles.login}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Register", { name: "Sign up" })}
          style={styles.sign}
        >
          <Text>Sign UP </Text>
        </TouchableHighlight>
      </View>
      <View>
        <Text style={{ textAlign: "center", marginTop: 58, opacity: 0.5 }}>
          Or Sign in with
        </Text>
      </View>
      <View style={styles.sm}>
        <Image source={require("./assets/Google.png")} />
        <Image source={require("./assets/Facebook.png")} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
  },
  welcome: {
    fontSize: 48,
    fontWeight: 900,
    color: "#00005A",
    textAlign: "left",
    paddingLeft: 20,
    marginBottom: 20,
  },
  text: {
    fontWeight: 500,
    fontSize: 14,
    color: "#838181",
    paddingLeft: 20,
    marginBottom: 50,
    opacity: 0.5,
  },
  forms: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  login: {
    backgroundColor: "#f16036",
    width: 174,
    height: 47,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    fontSize: 16,
    fontWeight: 500,
  },
  sign: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#3E3D3D",
    width: 174,
    height: 47,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    fontSize: 16,
    fontWeight: 500,
  },
  sm: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 9,
  },
});
