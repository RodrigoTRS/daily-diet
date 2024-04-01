import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.View`
    width: 100%;
    padding: 32px 16px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
`

export const PageTitle = styled.Text`
    font-family: ${props => props.theme.font.bold};
    font-size: 20px;
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    padding: 16px;
    left: 16px;
    border-radius: 8px;
`
interface BackIconProps {
    color: string
}

export const BackIcon = styled(MaterialIcons).attrs<BackIconProps>((props) => ({
    size: 32,
    color: props.color === "red" ? props.theme.colors["red-700"]
        : props.color === "green" ? props.theme.colors["green-700"]
        : props.theme.colors["gray-700"]  
}))``;