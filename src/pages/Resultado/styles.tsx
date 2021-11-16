import { styled } from "@material-ui/system";

export const ScoreContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  gap: 100px;

  .c-score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0.25em;
    gap: 10px;
    padding: 10px;
    min-width: 60px;
    h3 {
      margin: 0;
      color: #13ca41;
    }
    h4 {
      margin: 0;
    }
  }

  .c-score.c-correct {
    background: #13ca413b;
    h3 {
      color: #13ca41;
    }
  }

  .c-score.c-wrong {
    background: #ca13224e;
    h3 {
      color: #ca1322;
    }
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 0 0 20px 0;

  Button {
    background: ${(props) => props.theme.palette.secondary.main};
    border: 1px solid ${(props) => props.theme.palette.secondary.main};
    &:hover {
      color: ${(props) => props.theme.palette.secondary.main};
      background: #fff;
    }
  }
`;

export const QuestionsBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 900px;
  margin: 0 auto 0 auto;
  padding: 0 0 40px 0;
`;

export const QuestionBox = styled("div")`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.palette.primary.main};
  color: #fff;

  &.c-wrong-answer {
    border: solid 5px #ca13224e;
  }

  &.c-correct-answer {
    border: solid 5px #13ca414e;
  }
`;

export const AnswersGrid = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const Answer = styled("p")`
  text-align: center;
  padding: 10px;
  border-radius: 0.5em;
`;

export const CorrectAnswer = styled(Answer)`
  background: #13ca41a6;
`;

export const WrongAnswer = styled(Answer)`
  background: #ca1322b5;
`;
