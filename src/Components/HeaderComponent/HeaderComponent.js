import React, { useContext } from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";
import app from "../../firebaseConfig";
import { LogoDark, LogoWhite } from "../../images";
import { AuthContext } from "../../utils/useAuth";
import "./HeaderComponent.scss";

const HeaderComponent = (props) => {
    const headerVariant = props.variant;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar bg="transparent" variant={headerVariant}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={
                                headerVariant === "dark" ? LogoWhite : LogoDark
                            }
                            alt=""
                            className="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-4" href="/destinations">
                            Destination
                        </Nav.Link>
                        <Nav.Link className="mr-4" href="/packages">
                            packages
                        </Nav.Link>
                        <Nav.Link className="mr-4" href="/">
                            Blog
                        </Nav.Link>
                        <Nav.Link className="mr-4" href="/">
                            Contact
                        </Nav.Link>
                        {!!user ? (
                            <button
                                onClick={() => app.auth().signOut()}
                                className="btn btn-primary"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Nav.Link href="/login" className="btn btn-primary">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
