import Header from "../Components/Header";
import Content from "../Components/Content";
import Score from "../Components/Score";
import { FirstSection, SecondSection } from "../Components/Content/Content.styles"
import { useLocation } from "react-router-dom";
import Error from "./Error";
export default function Result() {
    const {state} = useLocation();
    if (state) {
        const {topic, score} = state;
        return (
            <>
                <Header topic={topic}/>
                <Content type="score">
                    <FirstSection>
                        <h1>Quiz completed</h1>
                        <h1 id="name">You scored...</h1>
                    </FirstSection>
                    <SecondSection>
                        <Score topic={topic} score={score}/>
                    </SecondSection>
                </Content>
            </>
        )
    }
    else {
        return(
            <>
                <Error/>
            </>
        )
    }
}