import { ReactNode } from "react";
import { Container } from "./styles";

interface LowerBoxProps {
    children?: ReactNode
}

export function LowerBox({ children }: LowerBoxProps) {
    return (
        <Container>
            { children }
        </Container>
    )
}