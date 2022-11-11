import React, { ReactElement, useState } from 'react';
import { ReactInput } from '../input';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


type LoginProps = {
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
        <Form onSubmit={submitHandler} method='POST'>
            
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Users </Form.Label>
                    <ReactInput placeholder='User' type='text' className="loginInput" / >
            </Form.Group>   

            <p id='divi'></p>
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Password </Form.Label>
                    <ReactInput placeholder='Password' type='password' className="loginInput" / >
            </Form.Group> 

            <Form.Group>
            <Button className='loginButtion' variant="outline-primary" type="submit">
                Login
            </Button>
            
            </Form.Group>
        </Form>
    )

}
