import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${props => props.theme.colors["gray-700"]};
    padding: 16px;
    border-radius: 8px;
`