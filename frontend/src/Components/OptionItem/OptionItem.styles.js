import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    min-width: 380px;
    padding: 10px;
    background: ${props => props.theme.theme.itemBgColor};
    border-radius: 14px;
    gap: 20px;
    align-items: center;
    text-align: start;
    cursor: pointer;
    box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, .14);
    border: 3px solid ${props => props.isChosen ? 'var(--primary-action-color)' : 
    props.isCorrect === true ? "var(--correct-color)" : props.isCorrect === false ? "var(--wrong-color)" 
    : 'none'};
    pointer-events: ${props => props.isCorrect == null ? 'all' : 'none'};

    .img-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 2.7rem;
        height: 2.7rem;
        min-width: 2.7rem;
        border-radius: 10px;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => (props.isChosen || props.isCorrect !== null) ? "white" : "var(--secondary-color)"};
        background: ${props => props.isChosen ? "var(--primary-action-color)" : 
        props.isCorrect === true ? "var(--correct-color)" : props.isCorrect === false ? "var(--wrong-color)" : 
        props.theme.theme.imgHolderBg};
    }

    &:hover .img-holder {
        background: var(--primary-action-color);
        color: white;
    }

    &:hover .choice {
        color: var(--primary-action-color)
    }

    &:hover {
        border: 3px solid var(--primary-action-color);
    }

    .choice {
        line-height: 1.2;
        width: 70%;
        font-size: 1.3rem;
        letter-spacing: 1.3;
        font-weight: 500;
        color: ${props => props.isChosen ? 'var(--primary-action-color)' :  props.theme.theme.color};
        
    }

    .flag-icon {
        position: absolute;
        right: 5px;
    }

    @media (max-width: 1200px) and (min-width: 600px) {
        .choice {
            flex-basis: 80%;
        }

    }

    @media (max-width: 1200px) {
        width: 100%;
        min-width: auto;

        .choice {
            width: 70%;
            font-size: 1.2rem;
        }
    }
`