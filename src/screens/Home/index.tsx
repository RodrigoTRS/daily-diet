import { ButtonWrapper, Container, HomeHeader, Logo, WrapperText } from "./styles";
import LogoImg from "../../assets/Logo.png"
import { StatisticsBox } from "../../components/StatisticsBox";
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

            <StatisticsBox
                percentage={90.86}
                onPress={() => navigation.navigate("statistics")}
                showIcon
            />

            <ButtonWrapper>
                <WrapperText>Refeições</WrapperText>
                <Button text="Nova refeição" icon="add"/>
            </ButtonWrapper>

        </Container>
    )
}