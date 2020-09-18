import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LayoutWhite from "../LayoutWhite/LayoutWhite";

const NotFound = () => {
    return (
        <LayoutWhite>
            <HeaderComponent variant="light" />
            <div className="jumbotron">
                <h1 className="text-center">You are lost baby girl!</h1>
            </div>
        </LayoutWhite>
    );
};

export default NotFound;
