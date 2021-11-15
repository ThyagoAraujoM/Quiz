import { createTheme } from "@material-ui/core";
import { DefaultTheme } from "@mui/private-theming";

export default function defaultTheme() {
  const theme: DefaultTheme = createTheme({
    palette: {
      primary: {
        main: "#544e61",
      },
      secondary: {
        main: "#7F96FF",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  return { theme };
}
