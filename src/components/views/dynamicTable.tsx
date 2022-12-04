import React, { ReactElement, ReactNode } from "react";
import { Table } from "react-bootstrap";


type DynamicTableProps = {
    children: ReactNode ;
    header: Array<string | number>;
    
}

export default function DynamicTable(props:DynamicTableProps):ReactElement{
    
    // if( (!isLoading) && (data!== undefined)){
    return(
      
        // <>
        // {React.Children.map<ReactElement,ReactElement>(props.children,(child) =>{
        //     if (React.isValidElement(child)){
        //         // console.log("valid element");React.cloneElement(child,dat
        //         return a)
        //     }
                
        //     else {
        //         console.log("return child in dynamic table");
        //         return child;}
        // } )}
        // </>
        
        <>
        <Table >
                <thead>
                    <tr>
                        {props.header.map((d,idx) => {return <th key={idx}> {d}</th>})}
                    </tr>
                </thead>
                
                <tbody>
                    {props.children}
                </tbody>
            </Table>
        </>
        
        
    )
    // } else {return <p>loading dynamic table</p>}
}