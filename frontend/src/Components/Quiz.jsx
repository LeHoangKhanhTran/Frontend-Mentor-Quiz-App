import Header from "./Header";
import Content from "./Content";
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Question from "./Question";
export default function Quiz() {
    const { topicName } = useParams();
    const [questionCount, setQuestionCount] = useState(1);
    const [topicData] = useFetch({path: 'topics', param: topicName});
    const questionsIds = useMemo(() => {
        return topicData ? topicData[0].questionsIds : [];
    }, [topicData])
    return (
        <>
            <Header topic={topicName.toLowerCase()}/>
            {questionsIds[questionCount - 1] && <Content>
                <Question questionId={questionsIds[questionCount - 1]} questionCount={questionCount} 
                setQuestionCount={setQuestionCount} length={questionsIds.length} topicName={topicName} />
            </Content>}
        </>
    )
}