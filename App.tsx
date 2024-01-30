import React from "react";
import Home from "./src/screens/Home";

import {
  useFonts as useFontsRoboto,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useFontsInter,
  Inter_100Thin,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

function App() {
  const [fontsRobotoLoaded] = useFontsRoboto({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const [fontsInterLoaded] = useFontsInter({
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsRobotoLoaded || !fontsInterLoaded) {
    return null
  }

  return <Home />;
}

export default App;
