import axios from "axios";
import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useUser } from "../context/auth";
import gitIcon from "../media/GitHub-Mark-64px.png"
import { IconBell, IconGitHub } from "./icons/icon";


export function INavbar(){
    const [messageClick, setMessageClick] = useState(false);
    const {
        name,
        avatar,
        authState,} = useUser();

    const clickMessage = () =>{
        setMessageClick(!messageClick);
        return( // TODO
            <>
            <span> temp message</span> 
            </>
        )
    }

    const logoutEvent = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const {data,status} = await axios.post("http://192.168.0.189:8000/logout/",{
                headers: {
                    "Access-Control-Allow-Origin": "*",                  
                }
            }
            );
            console.log(`logout user ${data} and ${status}`)
            return data;
        } catch(error){ console.log(error)}
    
    }
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
                        <>
                            <div>{name}</div>
                            <Button>{IconBell("2rem","2rem")}</Button>
                        </>
                    ) 
                    : <Nav.Link href="/login"  style={{position:"relative"}} > 
                            <Button variant="primary">
                                Login
                            </Button> 
                        </Nav.Link>
                    }
                       
                    <Nav.Link href="https://github.com/GKD890/BudgetHelper-Management"  style={{position:"relative"}}>
                        {IconGitHub("2rem","2rem")}
                    </Nav.Link>
                    <form onSubmit={logoutEvent}>
                    <Button className='loginButtion' variant="outline-danger" type="submit" >
                        Logout
                    </Button>
                    </form>    
                    
                </Nav>
            </Container>
        </Navbar>
    )
}