import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

interface BoxProps {
    color: "green" | "red" | "gray" | "transparent"
    width: "full" | "unset"
}

export const Container = styled.View<BoxProps>`
    width: ${props => props.width === "full" ? "100%" : "48%"};
    padding: 24px;
    border-radius: 8px;
    align-items: center;
    background: ${({ theme, color }) =>
        color === "green" ? theme.colors["green-300"]
        : color === "red" ? theme.colors["red-300"]
        : color === "gray" ? theme.colors["gray-300"]
        : "transparent"
    };
`

export const Statistic = styled.Text`
    font-family: ${props => props.theme.font.bold};
    font-size: 32px;
    text-align: center;
`

export const Description = styled.Text`
    font-family: ${props => props.theme.font.regular};
    color: ${props => props.theme.colors["gray-700"]};
    font-size: 16px;
    text-align: center;
`