import React, { ReactElement, useState } from 'react';
import { ReactInput } from '../input';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


type LoginProps = {
    userLabel: string;
    passwdLabel: string;
    className?: string;
}
export default function LoginTab(props:LoginProps):ReactElement {
    const [click, setClick] = useState("unclick");

    const submitHandler = (e:React.FormEvent) =>{
        e.preventDefault();
        setClick('Clicked')
        console.log("loged in");
    }
    return(
        <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' >
            {/* <Form.Group className={props.className} > */}
                <Form.Label > {props.userLabel} </Form.Label>
                    <ReactInput placeholder='User' type='text' / >
            </Form.Group>   

            <Form.Group className='mb-3' >
            {/* <Form.Group className={props.className} > */}
                <Form.Label > {props.passwdLabel} </Form.Label>
                    <ReactInput placeholder='Password' type='password' / >
                
            </Form.Group> 

            <Form.Group>
            <Button variant="outline-primary" type="submit">
                Login
            </Button>
            
            </Form.Group>
        </Form>
    )

}
