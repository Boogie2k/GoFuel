import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let [text, setText] = useState("witing");

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      if (errorMsg) {
        setText(errorMsg);
      } else if (location) {
        setText(JSON.stringify(location));
      }
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.menu}>
          <Image source={require("./assets/menu.png")} />
        </View>
        <View style={styles.locationView}>
          <Image source={require("./assets/map-pin.png")} />
        </View>
      </View>
      <MapView initialRegion={region} style={styles.map}>
        <Marker coordinate={region} title="marker" />
      </MapView>

      <View style={styles.bottom}>
        <Text style={styles.paragraph}>Fuel Type</Text>
        <View style={styles.prods}>
          <View style={styles.diselView}>
            <Image
              style={{ marginTop: "9%" }}
              source={require("./assets/prod.png")}
            />
            <Text style={styles.disel}>Disel</Text>
            <Text style={{ color: "white" }}>N720/Ltr</Text>
          </View>
          <View style={styles.othersView}>
            <Image
              style={{ marginTop: "9%" }}
              source={require("./assets/others.png")}
            />
            <Text style={styles.others}>Others</Text>
          </View>
        </View>

        <View style={styles.inputView}>
          <TextInput style={styles.input} />
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("Paymentoption", { name: "paymentoption" })
            }
            style={styles.nextBtn}
          >
            <Text style={styles.next}>next</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  nav: {
    position: "absolute",
    top: "5%",
    left: "5%",
    justifyContent: "space-between",

    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    width: 46,
    height: 46,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    marginRight: 8,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  locationView: {
    width: 290,
    height: 54,
    backgroundColor: "#FBF7F7",
    borderRadius: 30,

    elevation: 20,
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    backgroundColor: "#FAF8F8",
    height: "35%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paragraph: {
    color: "#00005A",
    fontWeight: 500,
    fontSize: 20,
  },
  prods: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  diselView: {
    width: "45%",
    backgroundColor: "#3760F0",
    minHeight: 110,
    borderRadius: 40,
    alignItems: "center",
    opacity: 0.9,
  },
  othersView: {
    width: "45%",
    backgroundColor: "#E3E1E1",
    minHeight: 110,
    borderRadius: 40,
    alignItems: "center",
  },
  disel: { color: "white", marginTop: "15%", fontSize: 20, fontWeight: 500 },

  others: {
    color: "#00005A",
    marginTop: "5%",
    fontWeight: 700,
    fontSize: 20,
  },
  inputView: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: 245,

    borderRadius: 50,
    minHeight: 56,
  },
  nextBtn: {
    backgroundColor: "#F16036",
    minHeight: 56,
    width: 89,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
  },
});
