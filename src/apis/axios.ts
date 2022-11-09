import axios from "axios";
import { memberUrl, recordUrl } from "./constants";

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

export type MemberList = {
    members:Member[];
}

export const getMembers = async () =>{ 
    try{
        const {data, status} = await axios.get<Member[]>(
            memberUrl,{
                headers: {
                    Accept: 'application/json'
                }
            }
        );
        // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
        return data;

    } catch(error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            // return error.message;
          } else {
            console.log('unexpected error: ', error);
            // return 'unexpected error !';
          }
    } 
} 

export const getRecords = async () =>{ 
    try{
        const {data, status} = await axios.get<MemberList>(
            recordUrl,{
                headers: {
                    Accept: 'application/json'
                }
            }
        );
        // console.log(`Status: ${status} \n member GET: ${JSON.stringify(data)}`)
        return data

    } catch(error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'unexpected error !';
          }
    }
   
}