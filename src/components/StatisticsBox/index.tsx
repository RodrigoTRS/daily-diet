import { Container, Description, Statistic } from "./styles";

interface StatisticsBoxProps {
    statistic: number
    description: string
    color?: "red" | "green" | "gray" | "transparent"
    percentage?: boolean
    width?: "full" | "unset"
}

export function StatisticsBox({ statistic, description, width = "full", percentage = false, color = "transparent" }: StatisticsBoxProps) {

    const normalizedStatistic = String(statistic).trim().replace(".", ",")
    const statisticDisplay = percentage ? normalizedStatistic.concat("%") : normalizedStatistic 

    return (
        <Container color={color} width={width} >
            <Statistic>{ statisticDisplay }</Statistic>
            <Description>{ description }</Description>
        </Container>
    )
}