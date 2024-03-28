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

export const Avatar = styled.View`
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors["red-300"]};
    align-items: center;
    justify-content: center;
`

export const AvatarText = styled.Text`
    color: ${props => props.theme.colors["red-700"]};
`