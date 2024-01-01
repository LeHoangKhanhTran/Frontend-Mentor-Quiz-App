import styled from "styled-components";

export const Wrapper = styled.li`
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 28vw;
    min-width: 360px;
    padding: 10px;
    background: ${props => props.theme.theme.itemBgColor};
    border-radius: 14px;
    gap: 25px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, .14);

    .img-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 10px;
    }
     
    .topic-name {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${props => props.theme.theme.color};
    }

    &:hover .topic-name {
        color: var(--primary-action-color)
    }

    .topic-img {
    width: 2.3rem;
    height: 2.3rem;
    }

    @media (max-width: 1200px) {
        width: 100%;
        min-width: auto;

        .topic-name {
            font-size: 1.2rem;
        }
    }
`