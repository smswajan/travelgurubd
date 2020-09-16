import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";
import "./Login.scss";

const Login = () => {
    const [previousUser, setPreviousUser] = useState(false);
    return (
        <LayoutWhite>
            <HeaderComponent variant="light" />
            <Container>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {previousUser ? (
                            <div className="auth-form p-5">
                                <form className="">
                                    <h3 className="mb-5">Create an account</h3>

                                    <input
                                        placeholder="Username or Email"
                                        type="email"
                                        className="form-control"
                                    />
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        className="form-control"
                                    />

                                    <button className="btn btn-primary btn-lg btn-block">
                                        Create an account
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Don't have an account?
                                    <span
                                        className="text-primary"
                                        onClick={() => setPreviousUser(false)}
                                    >
                                        Create an account
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div className="auth-form p-5">
                                <form className="">
                                    <h3 className="mb-5">Create an account</h3>
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        className="form-control"
                                    />
                                    <input
                                        placeholder="Last Name"
                                        type="text"
                                        className="form-control"
                                    />
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="form-control"
                                    />
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        className="form-control"
                                    />
                                    <input
                                        placeholder="Confirm Password"
                                        type="password"
                                        className="form-control mb-5"
                                    />
                                    <button className="btn btn-primary btn-lg btn-block">
                                        Create an account
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => setPreviousUser(true)}
                                        className="text-primary"
                                    >
                                        Login
                                    </span>
                                </p>
                            </div>
                        )}

                        <div className="p-5">
                            <button className="btn custom-auth-btn btn-block py-3 mb-3 ">
                                Continue with Facebook
                            </button>
                            <button className="btn custom-auth-btn btn-block py-3  ">
                                Continue with Facebook
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Container>
        </LayoutWhite>
    );
};

export default Login;
