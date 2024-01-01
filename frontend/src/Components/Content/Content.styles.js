import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: start;
    width: 72%;
    height: fit-content;

    section {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1200px){
        flex-direction: column;
        align-items: center;
        width: 80%;
        gap: 40px;
    }

    @media (max-width: 500px) { 
        width: 90%;
    }

`
export const FirstSection = styled.section`
    flex-basis: 60%;
    line-height: 1.1;
    
    h1 {
        font-weight: 100;
        display: inline-block;
        color: ${props => props.theme.theme.color};
        font-size: 3.6rem;
    }

    #name {
        font-weight: 700;
    }

    .text {
        font-weight: 600;
        color: ${props => props.theme.theme.secondaryTextColor};
        font-size: 1.2rem;
        font-style: italic;
    }

    #pick {
        margin-top: 30px;
        font-size: 1.1rem;
    }

    .question {
        margin-block-start: 30px;
        width: 90%;
        color: ${props => props.theme.theme.color};
        font-size: 2.4rem;
        font-weight: 500;
    }

    .progress-bar {
        position: absolute;
        box-sizing: border-box;
        width: 50%;
        bottom: 60px;
        background: ${props => props.theme.theme.progressBarColor};
        height: 14px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        padding: 0 5px;

}

    .progress-bar > span {
        border-radius: inherit;
        background-color: var(--primary-action-color);
        width: ${props => props.progress ? `${props.progress}%` : "0"};
        height: 60%;
    }

    @media (max-width: 1200px) {
        position: relative;
        width: 100%;
        h1 {
            font-size: 2.9rem;
        }
        
        .text {
            font-size: 1.1rem;
        }
        
        .question {
            font-size: 1.5rem;
            width: 100%;
        }

        .progress-bar {
            position: relative;
            margin-top: 30px;
            width: 100%;
            bottom: 0;
        }

    }
`
export const SecondSection = styled.section`
    position: relative;
    gap: 25px;
    flex-basis: 40%;
    height: 100%;
    align-items: end;

    @media (max-width: 1200px) {
        width: 100%;
        margin-block-end: 50px;
    }

    .error {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        color: var(--wrong-color);
        bottom: -50px;
    }
`