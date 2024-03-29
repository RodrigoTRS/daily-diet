import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { StatisticsBox } from "../../components/StatisticsBox";
import { Container } from "./styles";
import { LowerBox } from "../../components/LowerBox";

export function Statistics() {

    const navigation = useNavigation()

    function handleBackNavigate() {
        navigation.navigate("home")
    }

    const percentage = 90.86
    const headerColor = percentage > 50 ? "green" : "red"

    return (
        <Container>
            <Header backlink={handleBackNavigate} color={headerColor} />
            <StatisticsBox percentage={90.86} />

            <LowerBox>
                
            </LowerBox>
        </Container>
    )
}