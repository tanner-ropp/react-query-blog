import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { QueryClientProvider } from "@tanstack/react-query";

//

const GlobalStyles = createGlobalStyle`
  ${normalize};
  html, body, body, [data-reactroot] {
    min-height: 100%;
    max-width: 100%;
  }

  html, body {
    width: 100%;
    font-size: 16px;
    font-family: "Helvetica", "Georgia", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  input {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const App = ({ Component, pageProps }) => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  ) : null;
};

export default App;
