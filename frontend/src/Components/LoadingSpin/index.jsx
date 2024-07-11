import { Container, Spinner } from './LoadingSpin.styles';

export default function LoadingSpin({ message }) {
    return (
        <Container>
            <Spinner/>
            <div className='message'>{message}</div>
        </Container>
    )
}