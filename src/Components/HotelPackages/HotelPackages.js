import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";
import PackageComponent from "../PackageComponent/PackageComponent";
import "./HotelPackages.scss";
import { Map, GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "../GoogleMap/GoogleMap";

const HotelPackages = () => {
    const location = {
        address: "Cox's Bazar",
        lat: 21.430591,
        lng: 91.99775,
    };
    return (
        <LayoutWhite>
            <HeaderComponent variant="light" />
            <Container className="py-5">
                <div className="row">
                    <div className="col-md-7 pr-5">
                        <PackageComponent />
                        <PackageComponent />
                        <PackageComponent />
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
