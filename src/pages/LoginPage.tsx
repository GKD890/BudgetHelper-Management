import LoginTab from "../components/login/login";

export const LoginPage = ():React.ReactElement => {

        return (
          <LoginTab userLabel='User' passwdLabel='Password' className="mb-3" />
        );
      
}