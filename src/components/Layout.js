import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
    body{
        margin: 0;
        padding: 0;
        background-color: #e4ebea;
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
    width: 90vw;
    margin: 0 auto;
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
    color: black;
}
.postHeader{
    h2{
        color: grey;
        font-size: 14px;
    }
}
.postBody{
    background-color: white;
    padding: 15px 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px #cacfce;
    font-size: 20px;
}
.button{
    background-color: #e4ebea;
    text-align: center;
    padding: 1em;
    border: none;
}
.container{
    width: 90vw;
    margin: 0 auto;
}
`;
export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <React.Fragment>
            <GlobalStyle />
                <AppStyles>
                    <div class="header">
                        <div class="headerText">
                            <Header siteTitle = {title} siteDescription = {description} />
                        </div>
                    </div>
                    <div class="container">
                        <br />
                        { children }
                    </div>
                </AppStyles>
            </React.Fragment>
    );
};