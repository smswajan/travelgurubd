import React from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";

const HeaderComponent = (props) => {
    const headerVariant = props.variant;
    return (
        <div>
            <Navbar bg="transparent" variant={headerVariant}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
