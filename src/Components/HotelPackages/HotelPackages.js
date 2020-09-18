import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";
import PackageComponent from "../PackageComponent/PackageComponent";
import "./HotelPackages.scss";
import GoogleMap from "../GoogleMap/GoogleMap";
import packageData from "../../demoData/packageData";
import { useParams } from "react-router";
import destinationData from "../../demoData/destinations";

const HotelPackages = () => {
    const { place } = useParams();
    const placeInfo = destinationData.find((item) => item.key === place);
    const location = placeInfo.location;
    return (
        <LayoutWhite>
            <HeaderComponent variant="light" />
            <Container className="py-5">
                <div className="row">
                    <div className="col-md-7 pr-5">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h4 className="display-6">
                                    252 stays; September 6-9
                                </h4>
                                <h3>Stay in {placeInfo.spotName} </h3>
                            </div>
                        </div>
                        {packageData.map((item) => (
                            <PackageComponent pack={item} />
                        ))}
                    </div>
                    <div className="col-md-5 ">
                        <GoogleMap location={location} zoomLevel={17} />
                    </div>
                </div>
            </Container>
        </LayoutWhite>
    );
};

export default HotelPackages;
