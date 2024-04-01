import { Header } from "../../components/Header";
import { LowerBox } from "../../components/LowerBox";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Container, GeneralTitle, StatisticsContainer, StatisticsRow } from "./styles";
import { StatisticsBox } from "../../components/StatisticsBox";
import { useStatisticsStore } from "../../store/statistics";

export function Statistics() {

    const navigation = useNavigation()

    function handleBackNavigate() {
        navigation.navigate("home")
    }

    const {
        inDietPercentage,
        bestSequence,
        recordedMeals,
        inDietMeals,
        outsideDietMeals
    } = useStatisticsStore(state => {
        return {
            inDietPercentage: state.inDietPercentage,
            bestSequence: state.bestSequence,
            recordedMeals: state.recordedMeals,
            inDietMeals: state.inDietMeals,
            outsideDietMeals: state.outsideDietMeals
        }
    })

    const headerColor = inDietPercentage > 50 ? "green" : "red"

    return (
        <>
            <Container color={headerColor}>
                <Header backlink={handleBackNavigate} color={headerColor} />
                <StatisticsBox
                    statistic={inDietPercentage}
                    description="das refeições dentro da dienta"
                    percentage
                />
            </Container>

            <LowerBox>
                <ScrollView
                    style={{ width: "100%" }}
                    showsVerticalScrollIndicator={false}
                >
                    <StatisticsContainer>
                        <GeneralTitle>Estatísticas Gerais</GeneralTitle>

                        <StatisticsBox
                            statistic={bestSequence}
                            description="melhor sequência de pratos dentro da dieta"
                            color="gray"
                            />

                        <StatisticsBox
                            statistic={recordedMeals}
                            description="refeições registradas"
                            color="gray"
                            />
                        
                        <StatisticsRow>

                            <StatisticsBox
                                statistic={inDietMeals}
                                description="refeições na dieta"
                                color="green"
                                width="unset"
                            />

                            <StatisticsBox
                                statistic={outsideDietMeals}
                                description="refeições fora da dieta"
                                color="red"
                                width="unset"
                            />

                        </StatisticsRow>
                    </StatisticsContainer>
                </ScrollView>
            </LowerBox>
        </>
    )
}