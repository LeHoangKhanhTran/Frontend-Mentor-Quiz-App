import Header from "./Header";
import Content from "./Content";
import Score from "./Score";
import { FirstSection, SecondSection } from "./Content/Content.styles"
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