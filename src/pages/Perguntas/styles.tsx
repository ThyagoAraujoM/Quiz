import { Box, styled } from "@material-ui/system";

export const questions = styled("div")``;

export const QuestionBox = styled(Box)`
  border: 1px solid #000;
  padding: 10px;
  .c-question-header {
    display: flex;
    justify-content: space-between;
  }
  .c-answer-box {
    text-align: center;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 20px;
    }
  }
`;
