import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";
import { ThemeProvider } from "styled-components";
import { ThemeContextProvider, ThemeContext } from "./context/theme-context";

const config = {
    apiKey: "AIzaSyBr8EQsNXudn5shPJ5QZJZnA598mfMlsPg",
    authDomain: "duyloc-netflix.firebaseapp.com",
    projectId: "duyloc-netflix",
    storageBucket: "duyloc-netflix.appspot.com",
    messagingSenderId: "678640356038",
    appId: "1:678640356038:web:d60ac09445747ae6fda5c7",
};
window.firebase.initializeApp(config);

const Index = () => {
    const { curTheme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={curTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    );
};

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <ThemeContextProvider>
                <Index />
            </ThemeContextProvider>
        </FirebaseContext.Provider>
    </>,
    document.getElementById("root")
);
