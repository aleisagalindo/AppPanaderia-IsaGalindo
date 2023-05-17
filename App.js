import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ShopNavigator from "./src/navigation/ShopNavigator";

export default function App() {
  
  const [isPortrait, setIsPortrait] = useState(true);

  const statePortrait = () => setIsPortrait(onPortrait)

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait)
    }
  }, []);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width
  }

  console.log(isPortrait);
  

  const [loaded] = useFonts({
    PoppinsLight: require('./src/assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./src/assets/fonts/Poppins-Bold.ttf')
  })

  if (!loaded) return;

  return (
    <ShopNavigator />
    // <View style={styles.container}>
    //   {
    //     isPortrait ?
    //     <Text style={styles.texto}>Is in Portrait Mode!</Text>
    //     :
    //     <Text style={styles.texto1}>Is in LandScape Mode!</Text>
    //   }
      
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: 'PoppinsRegular',
  },
  texto1: {
    fontFamily: 'PoppinsBold',
  }
});
