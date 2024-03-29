import { Container, Letter } from "./styles";

interface AvatarProps {
    username: string;
}

export function Avatar({ username }: AvatarProps) {

    const initial = username.trim().substring(0, 1);

    return (
        <Container>
            <Letter>{initial}</Letter>
        </Container>
    )
}