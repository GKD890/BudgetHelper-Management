import { createContext, ReactNode, useContext, useState } from "react";

type UserStateProviderProps = {
    children:ReactNode;
}

interface UserInfo {
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
    // const [name, setName] = useState("");
    // const [id, setId] = useState(-1);
    // const [avatar, setAvatar] = useState("");

    const logOut = () => {
        setAuthState(false);
        setUserInfo({
            name:"",
            avatar:"",
            id:-1,
            // authState:false,
        })
    }

    const logIn = (user:UserInfo) =>{
        setUserInfo({
           name:user.name,
           id:user.id,
           avatar:user.avatar,
        //    authState: user.authState,
        });
        setAuthState(true);
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