import { Container, BackIcon, BackButton, PageTitle } from "./styles";

interface HeaderProps {
    color?: "default" | "green" | "red"
    title?: string;
    backlink: () => void;
}

export function Header({ color = "default", title, backlink }: HeaderProps) {
    return (
        <Container>
            <BackButton onPress={backlink}>
                <BackIcon color={color} name="arrow-back" />
            </BackButton>
            {title && <PageTitle>{ title }</PageTitle>}
        </Container>
    )
}