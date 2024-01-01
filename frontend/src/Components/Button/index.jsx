import { Wrapper } from "./Button.styles";

export default function Button({value, onClick, showError, setError}) {
    return (
        <Wrapper onClick={showError ? () => {setError(prev => true)} : () => {onClick()}}>{value}</Wrapper>
    )
}