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

const RegisterScreen = ({ navigation }) => {
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
        <Text style={styles.login}>Create my Account</Text>

        <View style={styles.form}>
          <Text style={styles.titles}>Full Name</Text>
          <TextInput style={styles.inputs} placeholder="Fullnme" />
          <Text style={styles.titles}>Your Email</Text>
          <TextInput style={styles.inputs} placeholder="enter your email" />
          <Text style={styles.titles}>password</Text>
          <TextInput style={styles.inputs} placeholder="enter your Password" />
        </View>

        <TouchableHighlight
          onPress={() => navigation.navigate("Login", { name: "Jane" })}
          style={styles.loginBtn}
        >
          <Text style={{ color: "white", fontWeight: 500, fontSize: 20 }}>
            Create my Account
          </Text>
        </TouchableHighlight>

        <View style={styles.confirm}>
          <Text>Don't Have an account? </Text>
          <Text
            onPress={() => {
              navigation.navigate("Login", { name: "Login" });
            }}
            style={{ color: "blue" }}
          >
            Login
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", marginTop: 15, color: "blue" }}>
            Or Sign up with
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

export default RegisterScreen;

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
    marginBottom: 2,
  },
  sm: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
