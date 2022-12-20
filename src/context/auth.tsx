import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

type UserStateProviderProps = {
    children:ReactNode;
}

export interface UserInfo {
    name:string;
    avatar:string;
    id: number;

}
interface UserContext extends UserInfo  {
    logOut: () => void;
    logIn: (user:UserInfo) => void;
    authState: boolean;
    // createUser: () => void;
}
const UserCtx = createContext({} as UserContext)

export function useUser(){
    return useContext(UserCtx);
}

export function UserStateProvider({children}:UserStateProviderProps) {
    const [authState, setAuthState] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name:"",
        avatar:"",
        id:-1,
        // authState:false
    })
    // const nav = useNavigate();
    // const [name, setName] = useState("");
    // const [id, setId] = useState(-1);
    // const [avatar, setAvatar] = useState("");

    // useEffect(()=>{
    //     console.log('nav')
    //     if(authState){return nav("/record/") }
    //     // else {return nav("/")};
    // },[authState, nav])

    const logOut = () => {

        setAuthState(false);
        console.log(`auth satate :${authState} @auth`)
        setUserInfo({
            name:"",
            avatar:"",
            id:-1,
        })

    }
    

    const logIn = (user:UserInfo) =>{
        if (sessionStorage.getItem("isAuthenticated") === "false"){
            setUserInfo({
            name:user.name,
            id:user.id,
            avatar:user.avatar,
            });
            setAuthState(true);
            console.log(`authState: ${authState} \n user: ${userInfo.name} avatar: ${userInfo.avatar}`)
        }
        else{console.log("server detected a login user")}
    }

    return(
        <UserCtx.Provider value={{
            ...userInfo,
            authState,
            logOut,
            logIn,
        }}>
            {children}
        </UserCtx.Provider>
    )
}