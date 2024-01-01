import { FirstSection, SecondSection } from "./Content/Content.styles";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import OptionItem from "./OptionItem";
import Button from "./Button";
import { useState, useMemo, useCallback, useEffect, useRef} from "react";
export default function Question({questionId, questionCount, setQuestionCount, length, topicName}) {
    const navigate = useNavigate();
    const [choice, setChoice] = useState(null);
    const score = useRef(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false)
    const [question] = useFetch({path: 'questions', param: questionId})
    useEffect(() => {
        if (question && choice === question.answer) {
            score.current = score.current + 1;
        }
    }, [isSubmitted])

    useEffect(() => {
        setError(prev => false)
    }, [choice])


    const progress = useMemo(() => {
        return Number(questionCount) / length * 100
    }, [questionCount])

    const submit = useCallback(() => {
        setIsSubmitted(prev => true)
        setError(prev => false)
    }, [])

    const getNextQuestion = useCallback(() => {
        setChoice(prev => null);
        setIsSubmitted(prev => false)
        setQuestionCount(prev => prev + 1)
    }, [])

    const showResult = useCallback(() => {
        navigate('/result', { state: {topic: topicName.toLowerCase(), score: score.current} })
    }, [score])

    const handleClick = useMemo(() => {
        if (!isSubmitted) return {
            text: 'Submit Answer',
            handler: submit
        }

        else if (questionCount === length) return {
            text: 'Show Result',
            handler: showResult
        }

        else return {
            text: 'Next Question',
            handler: getNextQuestion
        }
    }, [isSubmitted, questionCount])
    return (
    question && <>
            <FirstSection progress={progress}> 
                    <p className="text">Question {questionCount} of {length}</p>
                        <h3 className="question">{question.question}</h3>
                    <div className="progress-bar">
                        <span></span>
                    </div>
                </FirstSection>
                 <SecondSection>
                    {question.options.map((option, i) => {
                        return (
                            <OptionItem index={i} choice={option} isChosen={!isSubmitted && choice === option} 
                            isCorrect={!isSubmitted ? null : option === question.answer ? true : false} 
                            setChoice={setChoice}/>
                        )
                    })}
                    <Button value={handleClick.text} 
                    onClick={handleClick.handler} showError={!choice && !isSubmitted ? true : false} 
                    setError={setError}/>
                    {error && 
                        <div className="error">
                            <img src={require('../img/flag-icon/wrong-icon.svg').default}></img>
                            <span>Please select an answer</span>
                        </div> }
                </SecondSection>
        </> 
    )
}