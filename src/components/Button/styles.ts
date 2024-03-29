import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    
    background-color: ${props => props.theme.colors["gray-700"]};
`

export const ButtonText = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors["gray-100"]};
    font-family: ${props => props.theme.font.bold}
`

export const Icon = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors["gray-100"]
}))``;