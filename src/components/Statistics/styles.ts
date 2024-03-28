import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

interface SuccessProps {
    success: boolean 
}

export const Container = styled.TouchableOpacity<SuccessProps>`
    width: 100%;
    background: ${({ theme, success }) => success ? theme.colors["green-300"] : theme.colors["red-300"]};
    padding: 24px;
    border-radius: 8px;
    align-items: center;
`

export const Percentage = styled.Text`
    font-family: ${props => props.theme.font.bold};
    font-size: 32px;
`

export const Description = styled.Text`
    font-family: ${props => props.theme.font.regular};
    font-size: 16px;
`

export const ArrowIcon = styled(ArrowUpRight).attrs<SuccessProps>(({ theme, success}) => ({
    size: 24,
    color: success ? theme.colors["green-700"] : theme.colors["red-700"]
}))`
    position: absolute;
    top: 12px;
    right: 12px;
`;