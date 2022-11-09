import React, { ReactElement } from 'react';
import { JsxElement } from 'typescript';

type tableProps = {
    heading: Array<any>;
    data: Array<any>;
    childer?: JsxElement | JsxElement[];
}
// TODO: replace to bootstrap
function dynamic(data:Array<any>) { //data =[ [name,id,borrow,lend] ,[...] ]
    const test = data.map((item:string | number) => {
        // console.log(item);
        return  <td> {item} </td> ;
   })
   return test
};

export const Table = (props:tableProps):ReactElement => {
    
    return(
        <table>
            <thead>
                <tr>
                    {props.heading.map((d,idx) => {return <th> {d}</th>})}
                </tr>
            </thead>
            
            <tbody>
                { props.data.map((d,idx) => {return <tr> {dynamic(d) } </tr> }) }
            </tbody>
        </table>
    )
}