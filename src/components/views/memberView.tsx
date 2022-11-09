import React, { ReactElement, useEffect, useState } from 'react';
import { getMembers } from '../../apis/axios';
import { Table } from '../table';

const memberHeading = ['Member','Id',"Borrow","Lend"];

export const MemberView = ():ReactElement => {
    const [table,setTable] = useState(Array<any>);
    
    useEffect(() =>{
        const memberList = getMembers();
        memberList.then((res)=>{
            if (res){
                const test = res.map((n) =>{
                    return [n.name, n.id,n.borrow,n.lend]
                })
                setTable(test);
            }
        })  
    },[]);
    
    return(
        <Table heading ={memberHeading} data={table}  ></Table>
    )
}
