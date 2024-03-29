import styled from "styled-components/native"

export const Container = styled.View`
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors["red-300"]};
    align-items: center;
    justify-content: center;
`

export const Letter = styled.Text`
    color: ${props => props.theme.colors["red-700"]};
`