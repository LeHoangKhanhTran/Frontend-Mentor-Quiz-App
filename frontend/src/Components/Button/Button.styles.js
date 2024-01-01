import styled from "styled-components";

export const Wrapper = styled.button`
    background: ${props => props.theme.theme.actionColor};
    font-size: 1.4rem;
    color: white;
    width: 100%;
    min-width: 380px;
    padding: 1rem 0;
    border-radius: 14px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background: white;
        color: ${props => props.theme.theme.actionColor};
    }

    @media (max-width: 1200px) {
        width: 100%;
        min-width: auto;
        font-size: 1.2rem;
    }
`