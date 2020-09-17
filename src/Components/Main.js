import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "../utils/useAuth";
import HomePage from "./HomePage/HomePage";
import HotelPackages from "./HotelPackages/HotelPackages";
import Login from "./Login/Login";
import StartBookingPage from "./StartBookingPage/StartBookingPage";

const Main = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <PrivateRoute path="/destinations">
                            <StartBookingPage />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    );
};

export default Main;
