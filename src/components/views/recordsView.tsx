import React from 'react';
import { getRecords, Record } from '../../apis/axios';
import { convNull } from '../../apis/format';
import { useGetData } from '../../hooks/useGetData';
import DynamicTable from './dynamicTable';


// interface RecordViewProps  {
//     person: string;
//     other: string;
//     borrow:number;
//     lend:number;
//     repay?:number;
//     trans_date: Date;
//     complete:boolean = false;
//     description?:string;
// };

const header = ["person",
    "other_person",
    "borrow",
    "lend",
    "repay",
    "trans_date",
    "complete",
    "description"]


export const RecordView = ():React.ReactElement => {
    
    const {data,isLoading} = useGetData<Record>(getRecords());
    // console.log(`state data: ${data}`)
    if(!isLoading && data){

        return(
            <>
                <DynamicTable  header={header}>
                    {data.map((n,idx) =>{ 
                        let tempJSX = [];
                        let values = Object.values(n)
                        for( let idx = 0;idx <values.length;idx++ ){
                            let cur = values[idx]

                            if ( cur === null) {  //TODO: Temp Function: Remove null from database
                                cur = convNull(cur)                             
                            }
                            tempJSX.push(
                                <td key={idx}>{cur.toString()}</td>
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