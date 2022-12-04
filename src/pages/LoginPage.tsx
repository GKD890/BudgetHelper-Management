import { Container } from "react-bootstrap";
import LoginTab from "../components/login/login";
import { INavbar } from "../components/navbat";
// import s from "./LoginPage.css" ;
// import "./LoginPage.css";
import "./LoginPage.css";

export const LoginPage = ():React.ReactElement => {

  return (
    <>
      <INavbar />
      <Container >
        <LoginTab className="form-group"  />
      </Container>
    </>
      
    );
      
}