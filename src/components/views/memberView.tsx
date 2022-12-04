import React, { ReactElement } from 'react';
import { getMembers, Member } from '../../apis/axios';
import { useGetData } from '../../hooks/useGetData';
import DynamicTable from './dynamicTable';

const memberHeading = ['Member','Id',"Borrow","Lend"];


export const MemberView = ():ReactElement => {
    const {data,isLoading} = useGetData<Member>(getMembers());
    // console.log(`state data: ${data}`)
    if(!isLoading && data){
        // const curD = JSON.parse(JSON.stringify(data));
        // const curD = String(data)
        // console.log(curD)
        return(
            // <ReactTable heading ={memberHeading} data={table}  />
            <>
                <DynamicTable  header={memberHeading}>
                    {data.map((n,idx) =>{ 
                        let tempJSX = [];
                        let values = Object.values(n)
                        for( let idx = 0;idx <values.length;idx++ ){
                                tempJSX.push(
                                    <td key={idx}>{values[idx]}</td>
                                )
                        }
                        return <tr key={idx}> {tempJSX} </tr>;
                    })
                    
                    }
                </DynamicTable>
            
            </>
        )
    } else {return <span> Loading Data</span>}
    
}
