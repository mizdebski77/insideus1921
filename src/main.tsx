import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/StyledComponents/theme";
import { GlobalStyle } from "./core/StyledComponents/GlobalStyles";
import ReduxProvider from "./redux/provider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ReduxProvider>
                <GlobalStyle />
                <App />
            </ReduxProvider>
        </ThemeProvider>
    </StrictMode>
);
