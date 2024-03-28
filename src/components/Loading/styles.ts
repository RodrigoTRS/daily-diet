import styled from "styled-components/native"


export const Container = styled.View`
    flex: 1;
    background-color: ${porps => porps.theme.colors["gray-200"]};
    align-items: center;
    justify-content: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs((props) => ({
    color: props.theme.colors["green-500"]
  }))``;