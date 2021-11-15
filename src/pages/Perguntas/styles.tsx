import { Button, Container } from "@material-ui/core";
import { Box, styled } from "@material-ui/system";

export const QuestionsContainer = styled("div")`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
`;

export const QuestionBox = styled(Box)`
  background: ${(props) => props.theme.palette.primary.main};
  padding: 10px 25px;
  border-radius: 2em;
  color: #fff;

  .c-question-header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .c-answer-box {
    text-align: center;
    h4 {
      margin: 10px 0 5px 0;
    }
    div {
      display: grid;
      grid-auto-flow: column;

      justify-content: space-evenly;
    }
  }
`;

export const Answer = styled("p")`
  border: 1px solid ${(props) => props.theme.palette.secondary.main};
  padding: 5px 10px;
  background: #fff;
  color: ${(props) => props.theme.palette.secondary.main};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &.selected {
    background: ${(props) => props.theme.palette.secondary.main};
    color: #fff;
  }
`;

export const EndQuizButton = styled(Button)`
  width: 100px;
  margin: 0 auto 50px auto;
  background: ${(props) => props.theme.palette.secondary.main};
  border: solid 1px ${(props) => props.theme.palette.secondary.main};
  color: #fff;
  &:hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const Error = styled("p")`
  width: 200px;
  background: #bd3e3eca;
  padding: 10px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
