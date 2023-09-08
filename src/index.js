import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111"
};

const lightTheme = {
  textColor:"#111",
  backgroundColor:"whitesmoke"
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);