import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";

const PaymentOptionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("./assets/chevron-left.png")} />
      </TouchableHighlight>
      <Text style={styles.login}>Choose Payment Option</Text>
      <View style={styles.optionsView}>
        <TouchableHighlight style={styles.options}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("./assets/MasterCard.png")} />
            <Text style={styles.option}>Debit/Credit card</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.options}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("./assets/WebMoney.png")} />
            <Text style={styles.option}>Internet Banking</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.options}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("./assets/GP.png")} />
            <Text style={styles.option}>Google Pay</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.otherOption}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.option}>+ Add other options</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default PaymentOptionScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  login: {
    fontSize: 32,
    fontWeight: 600,
    color: "#00005A",

    marginTop: 90,
  },
  optionsView: {
    marginTop: 25,
  },
  options: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    width: 310,
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "pink",
    opacity: 0.5,
    alignItems: "center",
    marginBottom: 20,
  },
  otherOption: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    width: 310,
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#00005A",
    opacity: 0.5,
    alignItems: "center",
    marginBottom: 20,
  },

  option: {
    color: "black",
    opacity: 1,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 500,
  },
});
