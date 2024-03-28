import { Avatar, AvatarText, Container, HomeHeader, Logo } from "./styles";
import LogoImg from "../../assets/Logo.png"
import { Statistics } from "../../components/Statistics";
import { Text } from "react-native";
import { Button } from "../../components/Button";

export function Home() {
    return (
        <Container>
            <HomeHeader>
                <Logo source={LogoImg}/>
                <Avatar>
                    <AvatarText>R</AvatarText>
                </Avatar>
            </HomeHeader>

            <Statistics percentage={90.86}/>

            <Text>Refeições</Text>
            <Button text="Test"/>

        </Container>
    )
}