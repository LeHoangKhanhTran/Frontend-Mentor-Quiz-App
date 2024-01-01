import { Container } from './Content.styles'
export default function Content({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}