import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Layout from "../Layout/Layout";
import "./StartBookingPage.scss";

const StartBookingPage = () => {
    return (
        <Layout>
            <HeaderComponent />

            <div className="py-5 container text-white mt-5 pt-5">
                <div className="row d-flex align-items-center pt-5 mt-5">
                    <div className="col-md-6">
                        <h1 className="h1">COX'S BAZAR</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati, ducimus soluta blanditiis porro
                            reprehenderit qui, dolore illo natus accusantium
                            molestias quam maiores.
                        </p>
                        <button className="btn btn-primary">Booking</button>
                    </div>
                    <div className="col-md-6 text-secondary">
                        <div className="card form-card p-4">
                            <form>
                                <div className="form-group">
                                    <label for="origin">Origin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="origin"
                                        placeholder="Dhaka"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="origin">Destination</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="destination"
                                        placeholder="Cox's Bazar"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="startingDate">
                                                From
                                            </label>
                                            <input
                                                type="date"
                                                placeholder="09/11"
                                                id="startingDate"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="startingDate">
                                                From
                                            </label>
                                            <input
                                                type="date"
                                                placeholder="09/11"
                                                id="startingDate"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-lg btn-block d-block btn btn-primary">
                                    Start Booking
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default StartBookingPage;
