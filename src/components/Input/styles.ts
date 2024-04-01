import styled from "styled-components/native";

export const InputWrapper = styled.View`
    width: 100%;
    gap: 8px;
`

export const Label = styled.Text`
    font-size: 16px;
`

export const Container = styled.TextInput`
    border: 1px solid ${props => props.theme.colors["gray-500"]};
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
`