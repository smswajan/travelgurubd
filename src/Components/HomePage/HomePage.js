import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Layout from "../Layout/Layout";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <Layout>
            <HeaderComponent variant="light" />
            <div className="py-5 container text-white mt-5 pt-5">
                <div className="row d-flex align-items-center mt-5">
                    <div className="col-md-5">
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
                    <div className="col-md-7 ">
                        <div className="card-container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className=" destination-card card  px-4 mb-5 pb-5">
                                        <h1>COX'S BAZAR</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className=" destination-card card px-4 mb-5 pb-5">
                                        <h1>COX'S BAZAR</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className=" destination-card card  px-4 mb-5 pb-5">
                                        <h1>COX'S BAZAR</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
