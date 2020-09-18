import React from "react";
import { ImgHotelOne } from "../../images";
import "./PackageComponent.scss";
import { FaStar } from "react-icons/fa";
import packageData from "../../demoData/packageData";

const PackageComponent = ({ pack, place }) => {
    return (
        <div className="row mb-5">
            <div className="col-md-5">
                <img src={pack.img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7">
                <h5>{pack.title} </h5>
                <p>
                    {pack.guests} guests, {pack.bedrooms} bedrooms, {pack.beds}
                    beds, {pack.baths} baths
                </p>
                <p className="mb-0">{pack.facility}</p>
                <p className="mb-0">Cancellation flexibility available</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <FaStar className="text-primary" />{" "}
                        <strong>
                            {pack.rating} ({pack.users})
                        </strong>
                    </div>
                    <div>
                        <strong>${pack.price}</strong>/night
                    </div>
                    <div>
                        <strong>${pack.total} </strong>total
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageComponent;
