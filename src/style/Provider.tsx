import { ReactNode } from "react";
import { GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

interface PropsType {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
