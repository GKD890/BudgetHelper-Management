import React, {useState } from 'react';

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
    <input className={props.className}
        placeholder={props.placeholder} 
        type={props.type}
        value = {value} 
        onChange={handleValue} />
    )
}



