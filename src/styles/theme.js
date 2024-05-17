import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

const baseButtonStyle = {
  boxShadow: "none",
  textTransform: "capitalize",
  fontWeight: "initial",
  height: "40px",
  lineHeight: "1.5715rem",
  borderRadius: "2px",
  border: "none",
  minWidth: "0",
};

const theme = createTheme({
  typography: {
    fontFamily: font,
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          ...baseButtonStyle,
          backgroundColor: colors["con-sec-bg"],
          color: colors["white"],
          "&:hover": {
            boxShadow: "none",
            backgroundColor: colors["con-sec-bg"],
          },
        },
        outlinedSecondary: {
          ...baseButtonStyle,
          color: colors["black"],
          backgroundColor: colors["white"],
          border: `1px solid ${colors["out-sec-border"]}`,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: colors["out-sec-bg"],
            border: `1px solid ${colors["out-sec-border"]}`,
            color: colors["white"],
          },
        },
      },
    },
  },
});

export default theme;
