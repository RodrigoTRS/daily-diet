import { TextInputProps } from "react-native";
import { Container, InputWrapper, Label } from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps{
    label?: string;
}

export function Input({ label, ...props }: InputProps) {
    const { colors } = useTheme()


    return (
        <InputWrapper>
            {label && <Label>{label}</Label>}
            <Container
                placeholderTextColor={colors["gray-500"]}
                {...props}
            />
        </InputWrapper>
    )
}