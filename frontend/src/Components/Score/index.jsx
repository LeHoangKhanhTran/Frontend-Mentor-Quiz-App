import { Container } from "./Score.styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
export default function Score({topic, score}) {
    const requireTopic = require.context('../../img/topics-icon/', false, /\.svg$/)
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/')
    }
    return (
       <>
            <Container>
                <div className='title'>
                    <span className="img-holder">
                        <img className="topic-img" src={requireTopic(`./${topic}.svg`)} alt={`${topic}-icon`}></img>
                    </span>
                    <span id='topic'>{topic.toUpperCase()}</span>
                </div>
                <p className="score">{score}</p>
                <div className="text">out of 10</div>
            </Container>
            <Button value={"Play Again"} onClick={backToHome}/>
       </>
    )
}