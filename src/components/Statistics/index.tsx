import { ArrowIcon, Container, Description, Percentage } from "./styles";

interface StatisticsProps {
    percentage: number
}

export function Statistics({ percentage }: StatisticsProps) {

    const isSuccess = percentage > 50
    const normalizedPercentage = String(percentage).replace(".", ",").concat("%")

    return (
        <Container success={isSuccess}>
            <Percentage>{normalizedPercentage}</Percentage>
            <Description>das refeições dentro da dieta</Description>
            <ArrowIcon success={isSuccess}/>
        </Container>
    )
}