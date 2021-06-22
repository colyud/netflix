import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
    apiKey: "AIzaSyBr8EQsNXudn5shPJ5QZJZnA598mfMlsPg",
    authDomain: "duyloc-netflix.firebaseapp.com",
    projectId: "duyloc-netflix",
    storageBucket: "duyloc-netflix.appspot.com",
    messagingSenderId: "678640356038",
    appId: "1:678640356038:web:d60ac09445747ae6fda5c7",
};
const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root")
);
