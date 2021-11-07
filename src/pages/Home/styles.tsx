import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const ContextContainer = styled("div")`
  display: grid;
  height: 100vh;
  grid-auto-rows: 50px 1fr;
`;

export const HeaderStyled = styled("header")({
  padding: "0 20px",
  width: "100%",
  height: "60px",
  background: "#292929",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  h1: {
    margin: "0 auto",
  },
});

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
