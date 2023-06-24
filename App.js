import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import PaymentOptionScreen from "./PaymentOptionScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/*  <Image source={require("./assets/splash.png")} */}
      {/* <View style={styles.container}>
        <Welcome />
      </View> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Home"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Paymentoption" component={PaymentOptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
