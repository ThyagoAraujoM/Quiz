import { Button, MenuItem, Select } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { Box } from "@mui/system";

export const HeaderStyled = styled("header")`
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .c-header-select {
    background: ${(props) => props.theme.palette.primary.main};
    width: 190px;
    padding: 0px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  height: 30px;
  p {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin: 100px 0 50px 0;
    font-size: 28px;
    text-align: center;
  }
  .c-form {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .c-text-Input {
      background: #544e61;
      width: 150px;
      height: 36px;
      border: none;
      border-radius: 0.5em;
    }

    .c-error {
      position: absolute;
      bottom: -25px;
      left: 5px;
    }
  }
`;

export const StyledButton = styled(Button)`
  background: ${(props) => props.theme.palette.primary.main};
  color: #fff;
  border: 1px ${(props) => props.theme.palette.primary.main} solid;
  &:hover {
    background: #fff;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const QuestionsContainer = styled("div")`
  margin-top: 0px;
  background: ${(props) => props.theme.palette.primary.main};
`;

export const QuestionContainer = styled("div")`
  padding: 20px;
  border: solid 1px #fff;
  color: #fff;
`;

export const BoxStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${(props) => props.theme.palette.primary.main};
  border: 2px solid #0808085e;
  padding: 15px;
  color: #fff;

  .c-buttons-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const ModalButton = styled(StyledButton)`
  background: #fff;
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px ${(props) => props.theme.palette.primary.main} solid;

  &:hover {
    background: ${(props) => props.theme.palette.primary.main};
    color: #fff;
    border: 1px #fff solid;
  }

  .c-link {
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary.main};

    &:hover {
      color: #fff;
    }
  }
`;

export const ShowSelectedQuizButton = styled(Button)`
  margin-top: 40px;
  background: ${(props) => props.theme.palette.primary.main};
  color: #fff;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
    background: #fff;
  }
`;
