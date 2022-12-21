import React, { ReactElement, useEffect, useState } from 'react';
import { ReactInput } from '../input';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getMembers, Member, postInfo } from '../../utils/axios';
import { useGetData } from '../../hooks/useGetData';
import { useUser } from '../../context/auth';
import { loginUrl } from '../../utils/constants';
import { UserInfo } from '../../context/auth';
import { Navigate, redirect, useNavigate } from 'react-router-dom';


type LoginProps = {
    className?: string;
    // submitFunction: () => void;
    authState:boolean;
}
export default function LoginTab(props:LoginProps):ReactElement {
    const [selectUser, setSelectUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginDisable, setLoginDisable] = useState(false)
    const {isLoading,data} = useGetData<Member>(getMembers(),"member");
    const {logIn,authState} = useUser();

    const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let body={"user":selectUser,"password":password};
        const loginData = postInfo(loginUrl, body )
        console.log(`login as @${selectUser}, ${loginData} @login tab`);
        setPassword("");
        let logUser = {} as UserInfo;
        const curId = data?.find((n) => n.name===selectUser)?.id;
        if(curId){
            // const {name,avatar:"default",id:curId} = logUser ;
            logUser.name=selectUser;
            logUser.id = curId;
            logUser.avatar = "default-empty";
            logIn(logUser);
            console.log(`front-end auth state: ${authState} @login tab`);
            setLoginDisable(true);
        }
        setTimeout(()=>{
            setLoginDisable(false);
        },3000)
        
        
    }

    const selectHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{setSelectUser(e.target.value);}
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {setPassword(e.target.value)}

    

    return(
        <>
        {/* {authState && (<Navigate to="/" replace={true} />)} */}
        <Form onSubmit={submitHandler}>
            
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Users </Form.Label>
                    {/* <ReactInput placeholder='User' type='text' className="loginInput" / > */}
                    <Form.Select onChange={selectHandler} >
                        <option> Choose User</option>
                        {data  && (!isLoading)? data.map((n,idx)=>{
                            return(
                                <option key={idx}>{n.name}</option>
                                // <option key={idx}>{n.name}<p id='userId'>id: {n.id}</p></option>
                            )
                        }) : <option>Loading Users</option>
                        }
                    </Form.Select>
            </Form.Group>   

            <p id='divi'></p>
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Password </Form.Label>
                    {/* <ReactInput placeholder='Password' type='password' className="loginInput" / > */}
                    <Form.Control className={props.className}
                        placeholder="default password: 1234" 
                        type="password"
                        value = {password} 
                        onChange={handleValue} />
                    </Form.Group> 

            <Form.Group>
            <Button className='loginButtion' variant="outline-primary" type="submit" disabled={loginDisable}>
                Login
            </Button>
            
            </Form.Group>
        </Form>  
        </>    
    )


}
