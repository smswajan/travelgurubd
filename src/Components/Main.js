import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, useAuth } from "../utils/useAuth";
import HomePage from "./HomePage/HomePage";
import HotelPackages from "./HotelPackages/HotelPackages";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import StartBookingPage from "./StartBookingPage/StartBookingPage";

const Main = () => {
    return (
        <>
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    {/* <PrivateRoute
                        exact
                        path="/destinations"
                        component={StartBookingPage}
                    /> */}
                    <Route exact path="/login" component={Login} />
                    <Route
                        exact
                        path="/destinations/:place"
                        component={StartBookingPage}
                    />
                    <PrivateRoute
                        exact
                        path="/booking/:place"
                        component={HotelPackages}
                    />
                </div>
                {/* <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <PrivateRoute path="/destinations">
                        <StartBookingPage />
                    </PrivateRoute>
                    <PrivateRoute path="/packages">
                        <HotelPackages />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch> */}
            </Router>
        </>
    );
};

export default Main;
