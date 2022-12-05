import { createContext, useContext } from "react";

type UserContext = {
    name:string;
    avatar:string;
    id: number;
    authState: boolean;
}
const UserCtx = createContext({} as UserContext)

export function useUser(){
    return useContext(UserCtx);
}