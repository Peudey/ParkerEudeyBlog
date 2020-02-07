import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import { lightTheme, darkTheme } from './theme';
import Toggle from './Toggle';
import { useDarkMode } from './useDarkMode';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
    body{
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.body};
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
`
const AppStyles = styled.main`
.header{
    width: 100%;
    padding: .25em;
    background-color: #2e3942;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a{
        color: white;
    }
    h1{
        color: white;
    }
    p{
        font-weight: 600;
    }
}
.headerText{
    width: 50vw;
    position: relative;
    //left: 20vw;
}
.footer{
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 30vw;
    margin: 0 auto;
}
h1{
    font-weight: 700;
    color: ${({ theme }) => theme.text};
}
.postHeader{
    padding: 0px 20px;
    h2{
        color: grey;
        font-size: 14px;
    }
}
.postBody{
    background: ${({ theme }) => theme.gridBG};
    width: 70vw;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.dropShadow};
    font-size: 20px;
}
.button{
    background: ${({ theme }) => theme.body};
    text-align: center;
    padding: 1em;
    border: none;
    a:visited{
        color:${({ theme }) => theme.text};
    }
}
.container{
    width: 80vw;
    margin: 0 auto;
}
`;



export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();

    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <React.Fragment>
            <ThemeProvider theme={themeMode}>
            <GlobalStyle />
                <AppStyles>
                    <div class="header">
                        <div class="headerText">
                            <Header siteTitle = {title} siteDescription = {description} />
                        </div>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div class="container">
                        <br />
                        { children }
                    </div>
                </AppStyles>
            </ThemeProvider>
        </React.Fragment>
    );
};