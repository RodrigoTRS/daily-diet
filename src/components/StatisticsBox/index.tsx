import { TouchableOpacityProps } from "react-native";
import { ArrowIcon, Container, Description, Percentage } from "./styles";

interface StatisticsProps extends TouchableOpacityProps {
    percentage: number
    showIcon?: boolean
}

export function StatisticsBox({ percentage, showIcon = false, ...props }: StatisticsProps) {

    const isSuccess = percentage > 50
    const normalizedPercentage = String(percentage).replace(".", ",").concat("%")

    return (
        <Container success={isSuccess} {...props}>
            <Percentage>{normalizedPercentage}</Percentage>
            <Description>das refeições dentro da dieta</Description>
            {showIcon && <ArrowIcon success={isSuccess}/>}
        </Container>
    )
}