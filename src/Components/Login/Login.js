import React, { useState, useCallback, useContext } from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { withRouter, Redirect, useHistory, useLocation } from "react-router";
import app from "../../firebaseConfig";
import { AuthContext } from "../../utils/useAuth";
import { IcoGL, IcoFB } from "../../images";
import * as firebase from "firebase/app";

const Login = () => {
    const [returningUser, setReturningUser] = useState(false);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = useCallback(
        async (data) => {
            const { email, password } = data;
            try {
                await app.auth().signInWithEmailAndPassword(email, password);
                history.replace(from);
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const onCreateSubmit = useCallback(
        async (data) => {
            const { email, password, firstName } = data;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                history.replace(from);
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        app.auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignInWithFb = () => {
        app.auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };

    const { user } = useContext(AuthContext);
    if (user) {
        return <Redirect to="/" />;
    }
    return (
        <LayoutWhite>
            <HeaderComponent variant="light" />
            <Container>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {returningUser ? (
                            <div className="auth-form p-5">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className=""
                                >
                                    <h3 className="mb-5">
                                        Login to your account
                                    </h3>

                                    <input
                                        placeholder="Username or Email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        ref={register({ required: true })}
                                    />
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        ref={register({ required: true })}
                                    />

                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Don't have an account?
                                    <span
                                        className="text-primary"
                                        onClick={() => setReturningUser(false)}
                                    >
                                        Create an account
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div className="auth-form p-5">
                                <form
                                    onSubmit={handleSubmit(onCreateSubmit)}
                                    className=""
                                >
                                    <h3 className="mb-5">Create an account</h3>
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        ref={register({ required: true })}
                                    />
                                    {errors.firstName && (
                                        <span className="error">
                                            First Name is required
                                        </span>
                                    )}
                                    <input
                                        placeholder="Last Name"
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        ref={register({ required: true })}
                                    />
                                    {errors.lastName && (
                                        <span className="error">
                                            Last Name is required
                                        </span>
                                    )}
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        ref={register({ required: true })}
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            Email is required
                                        </span>
                                    )}
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        ref={register({ required: true })}
                                    />
                                    {errors.password && (
                                        <span className="error">
                                            Password is required
                                        </span>
                                    )}

                                    <input
                                        placeholder="Confirm Password"
                                        type="password"
                                        className="form-control mb-5"
                                        name="confirm_password"
                                        ref={register({
                                            validate: (value) =>
                                                value === watch("password"),
                                        })}
                                    />
                                    {errors.confirm_password && (
                                        <span className="error">
                                            Passwords don't match.
                                        </span>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Create an account
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => setReturningUser(true)}
                                        className="text-primary"
                                    >
                                        Login
                                    </span>
                                </p>
                            </div>
                        )}

                        <div className="p-5">
                            <button
                                onClick={handleSignInWithGoogle}
                                className="btn custom-auth-btn btn-block py-3 mb-3 "
                            >
                                <img src={IcoGL} alt="" /> Continue with Google
                            </button>
                            <button
                                onClick={handleSignInWithFb}
                                className="btn custom-auth-btn btn-block py-3  "
                            >
                                <img src={IcoFB} alt="" /> Continue with
                                Facebook
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Container>
        </LayoutWhite>
    );
};

export default withRouter(Login);
