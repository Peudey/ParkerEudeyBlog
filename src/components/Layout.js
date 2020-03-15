import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import SEO from "../components/SEO";
import { Header } from "./Header";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import Toggle from "./Toggle";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
    body{
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Playfair Display', serif;
        font-weight: 500;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
    }
    a{
        text-decoration: none;
    }
    a:focus{
        outline: none;
    }
`;
const AppStyles = styled.main`
  .container {
    width: 80vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    body {
      font-size: 12px;
    }
  }

  //Header Styling
  //May move to the header component
  .header {
    width: 100%;
    background-color: #2e3942;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      color: white;
    }
    h1 {
      color: white;
    }
    p {
      font-weight: 600;
    }
    .headerText {
      width: 50vw;
      min-width: 250px;
      p {
        width: 80vw;
      }
    }
  }

  .footer {
    display: flex;

    justify-content: center;
    flex-direction: row;
    width: 30vw;
    margin: 0 auto;

    //Previous and Next
    .button {
      background: ${({ theme }) => theme.body};
      text-align: center;
      padding: 1em;
      border: none;
      white-space: nowrap;
      a:visited {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  .postHeader {
    position: relative;
    left: 5vw;
    h2 {
      color: grey;
      font-size: 14px;
    }
  }
  .postBody {
    background: ${({ theme }) => theme.gridBG};
    margin: 0 auto;
    width: 70vw;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.dropShadow};
    font-size: 20px;
  }
  .credits {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 50vw;
    min-width: 300px;
    margin: 0 auto;
    font-size: 12px;
    a {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return null;
  }

  return (
    <>
      <SEO title="Parker Eudey's Blog" />
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <AppStyles>
          <div class="header">
            <div class="headerText">
              <Header siteTitle={title} siteDescription={description} />
            </div>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div class="container">
            <br />
            {children}
          </div>
          <span class="credits">
            <div>
              Sun Icon made by{" "}
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              >
                Pixel perfect
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <div>
              Moon Icon made by{" "}
              <a
                href="https://www.flaticon.com/authors/iconixar"
                title="iconixar"
              >
                iconixar
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </span>
        </AppStyles>
      </ThemeProvider>
    </>
  );
};
