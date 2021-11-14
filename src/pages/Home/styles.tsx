import { Button, Select } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { Box } from "@mui/system";

export const ContextContainer = styled("div")`
  display: grid;
  height: 100vh;
  grid-auto-rows: 50px 1fr;
`;
export const HeaderStyled = styled("header")`
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const SelectStyle = styled(Select)`
  color: #fff;
  background: #544e61;
  width: 190px;
`;

export const BoxStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #141412;
  border: 2px solid #080808;
  box-shadow: 24;
  padding: 2px 4px 3px;
  color: #fff;

  .c-buttons-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  h2 {
    margin: 100px 0 50px 0;
    font-size: 28px;
    text-align: center;
  }
  .c-input-container {
    .c-text-Input {
      background: #544e61;
      width: 210px;
      height: 30px;
      border: none;
    }
  }
`;

export const SubmitButton = styled(Button)`
  background: #544e61;
`;
