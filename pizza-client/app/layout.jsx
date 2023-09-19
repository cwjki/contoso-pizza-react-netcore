import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export const metadata = {
  title: "Contoso Pizza Store",
  description: "Your favorite place for pizza",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
