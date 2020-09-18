import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebaseConfig";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Layout from "../Layout/Layout";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <Layout>
            <HeaderComponent variant="dark" />
            <div className="py-5 container text-white mt-5 pt-5">
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {" "}
                        <h1 className="h1">COX'S BAZAR</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati, ducimus soluta blanditiis porro
                            reprehenderit qui, dolore illo natus accusantium
                            molestias quam maiores.
                        </p>
                        <button className="btn btn-primary">Booking</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 ">
                        <div className="card-container">
                            <div className="row">
                                <div className="col-md-4">
                                    <Link to="/destinations/coxsbazar">
                                        <div className=" destination-card destination-card-one card  px-4 mb-5 pb-5">
                                            <h2>COX'S BAZAR</h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/destinations/sreemangal">
                                        <div className=" destination-card destination-card-two card px-4 mb-5 pb-5">
                                            <h2>SREMANGAL</h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/destinations/sundarbans">
                                        <div className=" destination-card destination-card-three card  px-4 mb-5 pb-5">
                                            <h2>SUNDARBANS</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
