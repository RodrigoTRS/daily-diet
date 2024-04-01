import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${props => props.theme.colors["gray-100"]};
    border-radius: 32px 32px 0 0;
    padding: 0px 32px 32px;
    gap: 32px;
    align-items: center;
    justify-content: start
`