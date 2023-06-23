import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableHighlight
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("./assets/chevron-left.png")} />
        </TouchableHighlight>
        <Text style={styles.login}>Login</Text>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontWeight: 400,
            fontSize: 20,
          }}
        >
          Please sign in to continue
        </Text>
        <View style={styles.form}>
          <Text style={styles.titles}>Your Email</Text>
          <TextInput style={styles.inputs} placeholder="enter your email" />
          <Text style={styles.titles}>password</Text>
          <TextInput style={styles.inputs} placeholder="enter your Password" />
        </View>

        <TouchableHighlight
          onPress={() => navigation.navigate("HomeScreen", { name: "HomePge" })}
          style={styles.loginBtn}
        >
          <Text style={{ color: "white", fontWeight: 500, fontSize: 20 }}>
            Login
          </Text>
        </TouchableHighlight>

        <View style={styles.confirm}>
          <Text>Don't Have an account? </Text>
          <Text
            onPress={() =>
              navigation.navigate("Register", { name: "Register" })
            }
            style={{ color: "blue" }}
          >
            Sign Up
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", marginTop: 28, opacity: 0.5 }}>
            Or Sign in with
          </Text>
        </View>
        <View style={styles.sm}>
          <Image source={require("./assets/Google.png")} />
          <Image source={require("./assets/Facebook.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    fontSize: 32,
    fontWeight: 600,
    color: "#00005A",
    marginLeft: 20,
    marginTop: 90,
  },
  form: {
    marginLeft: 20,
    marginTop: 40,
  },
  titles: { fontWeight: 500, fontSize: 20, color: "#00005A", marginTop: 5 },
  inputs: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#00005A",
    width: 330,
    height: 48,
    borderRadius: 100,
    marginTop: 15,
  },
  loginBtn: {
    backgroundColor: "#f16036",
    width: 330,
    height: 47,
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    fontSize: 16,
    fontWeight: 500,
    marginTop: 70,
    marginLeft: 20,
  },
  confirm: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  sm: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
