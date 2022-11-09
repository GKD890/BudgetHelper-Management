import React, { ReactElement } from 'react';
import { ReactInput } from '../input';


type LoginProps = {
    userLabel: string;
    passwdLabel: string;
}
export default function LoginTab(props:LoginProps):ReactElement {
    const submitHandler = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log("loged in");
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label> {props.userLabel}
                    <ReactInput placeholder='User' type='text' / >
                </label>
        
                <label> {props.passwdLabel}
                    <ReactInput placeholder='Password' type='password' / >
                </label>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}
