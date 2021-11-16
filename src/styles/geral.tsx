import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const ContextContainer = styled("div")`
  min-height: 100vh;
  background: #ccf1ec;
`;

export const HeaderStyled = styled("div")`
  display: flex;
  align-items: center;

  padding: 20px;
  h1 {
    margin: 0 auto;
    transform: translate(-25%, 0);
  }
`;

export const ReturnButton = styled(Button)`
  background: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  .c-link {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    .c-link {
      color: ${(props) => props.theme.palette.primary.main};
    }
    background: #fff;
  }
`;
