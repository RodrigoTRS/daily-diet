import { ButtonText, Container, Icon } from "./styles";
import { Text, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

interface ButtonProps extends TouchableOpacityProps {
    text: string
    icon?: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary" 
}

export function Button({ text, icon, variant = "primary", ...props }: ButtonProps) {
    return (
        <Container {...props}>
            {icon && <Icon name={icon} />}
            <ButtonText>{text}</ButtonText>
        </Container>
    )
}