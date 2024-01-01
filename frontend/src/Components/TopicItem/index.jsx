import { useNavigate } from "react-router-dom"
import { Wrapper } from './TopicItem.styles'
export default function TopicItem({ id, value }) {
    const navigate = useNavigate();
    const navigateToQuiz = () => {
        navigate(`/quiz/${value}`, {
            state: {
                id: id
            }
        })
    }
    return (
            <Wrapper onClick={() => navigateToQuiz()}>
                <div className= {"img-holder " + value.toLowerCase()}>
                    <img className="topic-img" src={require("/src/img/topics" + "-icon/" + value.toLowerCase() + ".svg")}/>
                </div>
                <p className='topic-name'>{value}</p>
            </Wrapper>
    )
}