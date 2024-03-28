import { ReactNode } from "react";
import { Container } from "./styles";
import { Text } from "react-native";

interface ButtonProps {
    text: string,
}

export function Button({ text }: ButtonProps) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}