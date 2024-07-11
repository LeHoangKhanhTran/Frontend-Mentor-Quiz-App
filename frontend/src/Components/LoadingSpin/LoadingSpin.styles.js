import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  gap: 20px;

  .message {
    font-size: 1.6rem;
    color: ${props => props.theme.theme.color};
  }
`
export const Spinner = styled.div`
  border: 5px solid ${props => props.theme.theme.spinnerBg};
  border-top: 5px solid var(--primary-action-color);
  border-radius: 50%;
  width: 1.7rem;
  height: 1.7rem;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;