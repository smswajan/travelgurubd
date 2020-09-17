import React from "react";
import { ImgHotelOne } from "../../images";
import "./PackageComponent.scss";
import { FaStar } from "react-icons/fa";

const PackageComponent = () => {
    return (
        <div className="row mb-5">
            <div className="col-md-5">
                <img src={ImgHotelOne} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7">
                <h5>Stylish fresh airy appartment and room</h5>
                <p>2 bed, 2 bath, 4 Guests</p>
                <p>Wif air condition kitchen</p>
                <p>Cancellation flexibility available</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <FaStar className="text-primary" />{" "}
                        <strong>4.9(20)</strong>
                    </div>
                    <div>
                        <strong>$34</strong>/night
                    </div>
                    <div>
                        <strong>$167</strong>total
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageComponent;
