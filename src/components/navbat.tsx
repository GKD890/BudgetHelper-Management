import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export function INavbar(){
    return(
        <Navbar sticky="top" className="bg-white shadow-sm mb-3"  >
            <Container>
                <Nav >
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>

                    <NavDropdown title="Server List">
                        <NavDropdown.Item> Current Server </NavDropdown.Item>
                    </NavDropdown>
                    

                    <Nav.Link href="/record">
                        Record
                    </Nav.Link>                   
                </Nav>
            </Container>
        </Navbar>
    )
}