import Header from "../Components/Header";
import Content from "../Components/Content";
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Question from "./Question";
import Spinner from "../Components/Spinner";
export default function Quiz() {
    const { topicName } = useParams();
    const [questionCount, setQuestionCount] = useState(1);
    const {data, loading} = useFetch({path: 'topics', param: topicName});
    const questionsIds = useMemo(() => {
        return data ? data[0].questionsIds : [];
    }, [data])
    return (
        <>
            <Header topic={topicName.toLowerCase()}/>
            {loading && <Spinner/>}
            {questionsIds[questionCount - 1] && !loading && <Content>
                <Question questionId={questionsIds[questionCount - 1]} questionCount={questionCount} 
                setQuestionCount={setQuestionCount} length={questionsIds.length} topicName={topicName} />
            </Content>}
        </>
    )
}