import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/theme";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito"
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { Router } from "./src/routes";


export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular, Nunito_700Bold
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
        { fontsLoaded ? <Router /> : <Loading />}
    </ThemeProvider>
  );
}