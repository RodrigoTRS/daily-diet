import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface ContainerColorProps {
    color: "red" | "green"
}

export const Container = styled(SafeAreaView)<ContainerColorProps>`
    background-color: ${({ theme, color}) => color === "green" ? theme.colors["green-300"] : theme.colors["red-300"]};
`

export const GeneralTitle = styled.Text`
    font-family: ${props => props.theme.font.bold};
    font-size: 16px;
`

export const StatisticsContainer = styled.View`
    width: 100%;
    gap: 16px;
    align-items: center;
`
export const StatisticsRow = styled.View`
    flex-direction: row;
    gap: 16px;
`