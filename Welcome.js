import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/home.png")} />
      <View style={styles.fast}>
        <Text style={styles.text}>Fast &</Text>
        <Text style={styles.rel}>Reliable</Text>
        <Text style={styles.desc}>
          Get Fuel whenever you need, we are available
        </Text>
      </View>

      <View style={styles.nav}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>

      <TouchableHighlight style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  fast: {
    paddingLeft: 30,
  },
  text: {
    fontSize: 48,
    fontWeight: 900,
    color: "blue",
  },
  rel: {
    fontSize: 48,
    fontWeight: 900,

    borderStyle: "solid",
    color: "#F16036",
  },
  desc: {
    fontSize: 14,
    fontWeight: 500,
    color: "#838181",
    opacity: 0.5,
  },
  nav: {
    paddingLeft: 30,
    flexDirection: "row",
    paddingTop: 44,
  },
  left: {
    width: 41,
    height: 16,
    backgroundColor: "#00005A",
    borderRadius: 16,
    marginRight: 12,
  },
  right: {
    width: 17,
    height: 16,
    borderRadius: 61,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f16036",
  },
  btn: {
    backgroundColor: "#F16036",
    width: 368,
    height: 56,
    marginTop: 116,
    borderRadius: 40,
    marginLeft: 30,
    justifyContent: "center",
    opacity: 0.8,
    alignItems: "center",
  },
  btnText: {
    fontSize: 24,
    fontWeight: 500,
    color: "#ffffff",
  },
});
