import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.colors["gray-200"]};
    padding: 24px;
    gap: 32px;
`

export const HomeHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image`
    width: 82px;
    height: 36px;
`

export const ButtonWrapper = styled.View`
    gap: 8px;
`

export const WrapperText = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors["gray-700"]};
    font-family: ${props => props.theme.font.regular};
`
