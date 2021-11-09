import { Select } from "@material-ui/core";
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
  background: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1: {
    margin: 0 auto;
  }
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

export const SelectStyle = styled(Select)`
  color: #fff;
  width: 190px;
  position: absolute;
  right: 0px;
`;

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  h2 {
    margin: 100px 0 80px 0;
    font-size: 30px;
  }
  .c-input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p {
      font-size: 24px;
    }
  }
`;
