import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";
import gitIcon from "../media/GitHub-Mark-64px.png"
import { logoutUrl } from "../utils/constants";
import { IconBell, IconGitHub } from "./icons/icon";


export function INavbar(){
    const [messageClick, setMessageClick] = useState(false);
    const nav = useNavigate();
    const {
        name,
        avatar,
        authState,
        logOut} = useUser();

    const clickMessage = () =>{setMessageClick(!messageClick);}

    const logoutEvent = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const {data,status} = await axios.post(logoutUrl,{
                headers: {
                    "Access-Control-Allow-Origin": "*",                  
                }
            }
            );
            console.log(`${status}: logout user ${data} `)
            logOut();
            return data;
        } catch(error){ console.log(error)}
        
        // nav("/");
    }
    return(
        <Navbar sticky="top" className="bg-white shadow-sm mb-5"  >
            <Container style={{height:"60px"}}>
                <Nav className="w-100" >
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>

                    <NavDropdown title="Server List">
                        {}
                        <NavDropdown.Item> Current Server </NavDropdown.Item>
                    </NavDropdown>
                    

                    <Nav.Link href="/record" className="me-auto">
                        Record
                    </Nav.Link> 

                    {authState?
                    (
                        <>
                        <NavDropdown title={name}>
                            <Nav.Item>
                                
                                    <form onSubmit={logoutEvent}>
                                        <Button className='sm-loginButtion' variant="outline-danger" type="submit" >
                                            Logout
                                        </Button>
                                    </form>
                                
                            </Nav.Item>
                            
                              
                        </NavDropdown>
                        <Button onClick={clickMessage}>{IconBell("1.5rem","1.5rem")}</Button>
                        {messageClick? <p> temp message</p> : null}
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
                      
                    
                </Nav>
            </Container>
        </Navbar>
    )
}