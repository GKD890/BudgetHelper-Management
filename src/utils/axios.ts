import axios from "axios";
import { memberUrl, recordUrl, serverUrl } from "./constants";

export type Member = {
    name: string;
    id: number;
    borrow: number
    lend: number;
}

export type Record = {
    person: string;
    other_person: string;
    borrow: number;
    lend: number;
    repay: number;
    trans_date: Date;
    complete: boolean;
    description: string;
}

export const getMembers = async () =>{ 
    // try{
    //     const {data, status} = await axios.get<Member[]>(
    //         memberUrl,{
    //             headers: {
    //                 Accept: 'application/json'
    //             }
    //         }
    //     );
    //     // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
    //     // return JSON.stringify(data);
    //     return data;

    // } catch(error) {
    //     if (axios.isAxiosError(error)) {
    //         console.log('error message: ', error.message);
    //         // return error.message;
    //       } else {
    //         console.log('unexpected error: ', error);
    //         // return 'unexpected error !';
    //       }
    // } 
    const {data, status} = await axios.get<Member[]>(
                memberUrl,{
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );
            // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
            // return JSON.stringify(data);
            return data;
} 

export const getRecords = async () =>{ 
    // try{
    //     const {data, status} = await axios.get<Record[]>(
    //         recordUrl,{
    //             headers: {
    //                 Accept: 'application/json'
    //             }
    //         }
    //     );
    //     // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
    //     return data

    // } catch(error) {
    //     if (axios.isAxiosError(error)) {
    //         console.log('error message: ', error.message);
            
    //       } else {
    //         console.log('unexpected error: ', error);
        
    //       }
    // }
    const {data, status} = await axios.get<Record[]>(
        recordUrl,{
            headers: {
                Accept: 'application/json'
            }
        }
    );
    // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
    return data
   
}

export async function postInfo(url:string, postObject:any){
    try{
        const {data,status} = await axios.post(url,{
            ...postObject,
        },{
            headers: {
                // Accept: 'application/json',
                'Content-Type':'multipart/form-data'
                // 'Content-Type':"application/x-www-form-urlencoded"
            }
        });
        console.log(`from axios post ${postObject}`)
        return {status,data};
    } catch(error){ console.log(error)}
}

export async function getServer(){
    try{
        const {data, status} = await axios.get(
            serverUrl,{
                headers: {
                    Accept: 'application/json'
                }
            }
        );
        // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
        return data
    } catch(error){ console.log(error)}

}