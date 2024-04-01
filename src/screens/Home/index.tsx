import { ButtonWrapper, Container, HomeHeader, Logo, WrapperText } from "./styles";
import LogoImg from "../../assets/Logo.png"
import { StatisticsButton } from "../../components/StatisticsButton";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation()

    return (
        <Container>
            <HomeHeader>
                <Logo source={LogoImg}/>
                <Avatar username="Rodrigoteix"/>
            </HomeHeader>

            <StatisticsButton
                percentage={90.86}
                onPress={() => navigation.navigate("statistics")}
            />

            <ButtonWrapper>
                <WrapperText>Refeições</WrapperText>
                <Button text="Nova refeição" icon="add"/>
            </ButtonWrapper>

        </Container>
    )
}