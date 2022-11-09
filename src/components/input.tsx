import React, {useState } from 'react';
import { Form } from 'react-bootstrap';

type InputProps = {
    className?: string;
    placeholder: string;
    type: string;
    maxLength?: number;
}

export const ReactInput = (props:InputProps) => {
    const [value,setValue] = useState('')
    
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {setValue(e.target.value)}
    return(
    <Form.Control className={props.className}
        placeholder={props.placeholder} 
        type={props.type}
        value = {value} 
        onChange={handleValue} />
    )
}



