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

export const QuestionContainer = styled("div")`
  padding: 20px;
  background: #7e7c7ca7;
`;

export const AnswersGrid = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Answer = styled("p")`
  text-align: center;
  padding: 10px;
  border-radius: 0.5em;
`;

export const CorrectAnswer = styled(Answer)`
  background: #13ca414e;
`;

export const WrongAnswer = styled(Answer)`
  background: #ca13224e;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;
