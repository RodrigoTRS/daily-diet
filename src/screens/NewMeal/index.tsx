import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Column, Container, Grid } from "./styles";
import { LowerBox } from "../../components/LowerBox";
import { Input } from "../../components/Input";

export function NewMeal() {
    
    const navigation = useNavigation()

    function handleBackNavigate() {
        navigation.navigate("home")
    }

    return (
        <>
            <Container>
                <Header backlink={handleBackNavigate} title="Nova refeição"/>
            </Container>
            <LowerBox>
                <Input
                    label="Nome"
                />
                <Input
                    label="Descrição"
                    multiline={true}
                    numberOfLines={4}
                    style={{ height: 160, textAlignVertical: "top" }}
                />
                <Grid>
                    <Column>
                        <Input
                            label="Data"
                            inputMode="numeric"

                        />
                    </Column>
                    <Column>
                        <Input
                            label="Hora"
                        />
                    </Column>
                </Grid>
            </LowerBox>
        </>
    )
}