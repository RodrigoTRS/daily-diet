import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { useTheme } from "styled-components/native"
import { AppRoutes } from "./app.routes"

export function Router() {
    const theme = useTheme()
    
    return (
        <View style={{ flex: 1, backgroundColor: theme["gray-200"]}}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}