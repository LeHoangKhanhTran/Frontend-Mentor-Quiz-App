import { Wrapper } from "./OptionItem.styles"

export default function OptionItem({index, choice, isChosen, isCorrect, setChoice}) {
    const labels = ['A', 'B', 'C', 'D'];
    return (
        <Wrapper isChosen={isChosen} onClick={() => {setChoice(prev => choice)}} isCorrect={isCorrect}>
            <div className="img-holder">
                {labels[index]}
            </div>
            <p className='choice'>{choice}</p>
            {isCorrect === true && <img className='flag-icon' src={require('../../img/flag-icon/correct-icon.svg').default}></img>}
            {isCorrect === false && <img className='flag-icon' src={require('../../img/flag-icon/wrong-icon.svg').default}></img>}
        </Wrapper>
)}