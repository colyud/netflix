import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { theme } from "./theme.js";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";
import { ThemeProvider } from "styled-components";

const config = {
    apiKey: "AIzaSyBr8EQsNXudn5shPJ5QZJZnA598mfMlsPg",
    authDomain: "duyloc-netflix.firebaseapp.com",
    projectId: "duyloc-netflix",
    storageBucket: "duyloc-netflix.appspot.com",
    messagingSenderId: "678640356038",
    appId: "1:678640356038:web:d60ac09445747ae6fda5c7",
};
window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </FirebaseContext.Provider>,
    document.getElementById("root")
);
