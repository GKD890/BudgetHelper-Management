import LoginTab from "../components/login/login";
// import s from "./LoginPage.css" ;
// import "./LoginPage.css";
import "./LoginPage.css";

export const LoginPage = ():React.ReactElement => {

  return (
    <div className="loginTab" >
    <h2> Choose User </h2>
      <LoginTab className="form-group"  />
    </div>
      
    );
      
}