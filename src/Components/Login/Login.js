import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/useAuth";

const Login = () => {
    const [returningUser, setReturningUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const auth = useAuth();
    const onSubmit = (data) => {
        console.log(data);
        if (returningUser) {
            if (data.email && data.password) {
                console.log("Previous");
                auth.signIn(data.email, data.password);
            }
        } else {
            if (
                data.firstName &&
                data.email &&
                data.password &&
                data.confirm_password
            ) {
                console.log("new");
                auth.signUp(data.email, data.confirm_password, data.name);
            }
        }
    };

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
                                    <h3 className="mb-5">Create an account</h3>

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
                                        Create an account
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
                                    onSubmit={handleSubmit(onSubmit)}
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
