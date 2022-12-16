import { Container } from "react-bootstrap";
import LoginTab from "../components/login/login";
import { INavbar } from "../components/navbar";
import { useUser } from "../context/auth";
// import s from "./LoginPage.css" ;
// import "./LoginPage.css";
import "./LoginPage.css";

export const LoginPage = ():React.ReactElement => {
  
  return (
    <>
      <INavbar />
      <Container className="bg-light mg-5" >
        <LoginTab className="form-group"  />
      </Container>
    </>
      
    );
      
}