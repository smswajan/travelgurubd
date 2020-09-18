import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main";
import { AuthProvider } from "./utils/useAuth";

function App() {
    return (
        <>
            <AuthProvider>
                <Main />
            </AuthProvider>
        </>
    );
}

export default App;
