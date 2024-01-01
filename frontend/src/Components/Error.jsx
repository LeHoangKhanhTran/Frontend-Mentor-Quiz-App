import Header from "./Header"
import styled from "styled-components"

const Container = styled.main`
    width: 100%;
    text-align: center;

    h1 {
        color: ${props => props.theme.theme.color};
        font-size: 3rem;
        margin-top: 20px;
    }

    img {
        width: 6rem;
        height: 6rem;
    }
`
export default function Error() {
    return (
        <>
            <Header/>
            <Container>
                <img src={require('../img/flag-icon/wrong-icon.svg').default}></img>
                <h1>:( Sorry, an error has occured.</h1>
            </Container>
        </>
    )
}