import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#1297AF",
            light: "#D6F5F5",
            dark: '#08404A',
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#FFFFFF",
            dark: "#4F4F4F",
            light: '#F5F5F5',
            contrastText: '#4D4D4D'
        }
    },
});

theme = responsiveFontSizes(theme)
export default theme

