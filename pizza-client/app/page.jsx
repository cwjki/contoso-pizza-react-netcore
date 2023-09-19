"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
import Pizza from "@/components/Pizza";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <h1>Contoso Pizza</h1>
        <Pizza />
      </section>
    </ThemeProvider>
  );
};

export default Home;
