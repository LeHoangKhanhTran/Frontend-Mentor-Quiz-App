import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 35px 0;
    gap: 30px;
    align-items: center;
    background-color: ${props => props.theme.theme.itemBgColor};
    width: 100%;
    height: fit-content;
    margin-block-end: 15px;
    border-radius: 14px;

    .title {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .img-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 10px;
        background: ${props => props.theme.theme.imgHolderBg};
    }

    .topic-img {
    width: 2.3rem;
    height: 2.3rem;
    }

    #topic {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${props => props.theme.theme.color};
    }
    
    .text {
        margin-top: -10px;
        font-weight: 500;
        color: var(--secondary-text-color);
        font-size: 1.2rem;
       
    }

    .score {
        font-size: 7.2rem;
        color: ${props => props.theme.theme.color};
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`    
