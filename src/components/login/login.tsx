import React, { ReactElement, useState } from 'react';
import { ReactInput } from '../input';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getMembers, Member, postInfo } from '../../utils/axios';
import { useGetData } from '../../hooks/useGetData';
import { useUser } from '../../context/auth';
import { loginUrl } from '../../utils/constants';


type LoginProps = {
    className?: string;
    // submitFunction: () => void;
}
export default function LoginTab(props:LoginProps):ReactElement {
    const [selectUser, setSelectUser] = useState("");
    const {data} = useGetData<Member>(getMembers());
    const {logIn} = useUser();
    const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // const postuser = {"user":selectUser,"password":"1234"};
        let body={"user":selectUser,"password":"1234"};
        // console.log(body)
        const loginData = postInfo(loginUrl, body )
        console.log(`login as @${selectUser}, ${loginData}`);
    }

    const selectHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectUser(e.target.value);
    }
    return(
        <Form onSubmit={submitHandler}>
            
            <Form.Group className={props.className} >
                <Form.Label className='loginLabel' > Users </Form.Label>
                    {/* <ReactInput placeholder='User' type='text' className="loginInput" / > */}
                    <Form.Select onChange={selectHandler} >
                        <option> Choose User</option>
                        {data? data.map((n,idx)=>{
                            return(
                                <option key={idx}>{n.name}</option>
                            )
                        }) : <option>Loading Users</option>
                        }
                    </Form.Select>
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
