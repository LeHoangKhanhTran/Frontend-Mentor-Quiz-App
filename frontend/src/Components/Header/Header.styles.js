import styled from "styled-components";

export const Wrapper = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    width: 72%;
    height: 23dvh;
    padding: 20px 0;


    @media (max-width: 1200px) {
        width: 80%;
        height: 18dvh;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`
export const ThemeChanger = styled.section`
    position: absolute;
    right: 0;
    display: flex;
    gap: 10px; 

    .toggle {
        box-sizing: border-box;
        position: relative;
        display: flex;
        padding: 0 4px;
        width: 45px;
        height: 24px;
        background: var(--primary-action-color);
        border-radius: 20px;
        cursor: pointer;
        transition: 2s;
    }

    .toggle span {
        position: relative;
        width: 20px;
        height: 20px;
        margin: auto 0;
        background: white;
        border-radius: 50%;
        transition: left 0.35s;
        left: ${props => props.theme.theme.name === 'dark' ? '17px' : '0'}
    }

    @media (max-width: 1050px) and (min-width: 600px) {
        gap: 25px;

        .toggle, #sun-icon, #moon-icon {
            transform: scale(1.3);
        }

    }

`
export const TopicDisplay = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;

    .topic-name {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${props => props.theme.theme.color};
    }

    .img-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.theme.imgHolderBg};
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 10px;
    }

    @media (max-width: 1050px) and (min-width: 600px) {
        .img-holder > img {
            transform: scale(1.6);
        }

        .topic-name {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 500px) {
        .topic-name {
            font-size: 1.2rem;
        }
    }
`