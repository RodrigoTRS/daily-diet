import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${props => props.theme.colors["gray-400"]};
`

export const Grid = styled.View`
    flex-direction: row;
    gap: 16px;
`

export const Column = styled.View`
    width: 48%;
`