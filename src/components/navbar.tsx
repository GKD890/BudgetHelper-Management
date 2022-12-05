import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useUser } from "../context/auth";
import gitIcon from "../media/GitHub-Mark-64px.png"


export function INavbar(){
    const {
        name,
        avatar,
        id,
        authState,} = useUser();
    return(
        <Navbar sticky="top" className="bg-white shadow-sm mb-5"  >
            <Container style={{height:"60px"}}>
                <Nav className="w-100" >
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>

                    <NavDropdown title="Server List">
                        <NavDropdown.Item> Current Server </NavDropdown.Item>
                    </NavDropdown>
                    

                    <Nav.Link href="/record" className="me-auto">
                        Record
                    </Nav.Link> 

                    {authState?
                    (
                        <div>{name}</div>
                    ) 
                    : <Nav.Link href="/login"  style={{position:"relative"}} > Login </Nav.Link>
                    }
                       
                    <Nav.Link href="https://github.com/GKD890/BudgetHelper-Management"  style={{position:"relative"}}>
                        <img src={gitIcon} alt="GitHub" style={{width:"24px",height:"24px"}}></img>
                    </Nav.Link>    
                    
                </Nav>
            </Container>
        </Navbar>
    )
}