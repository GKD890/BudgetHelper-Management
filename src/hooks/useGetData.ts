import { useEffect, useState } from "react";

export function useGetData<T>(func: Promise<T[]>,name:string ) {
    const [data, setData] = useState<undefined  |Array<T>>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if(setIsLoading){
            (async () =>{
                const curData = await func; // async function
                console.log("get data function in dynamic table");
                setData(curData );
                // console.log(`hooks data: ${curData}`)
                setIsLoading(false);
            })();
        }
        return(setIsLoading(false))
   },[name]);

    // setIsLoading(true);
    // const test = async () =>{
    //     const curData = await func; // async function
    //     console.log("get data function in dynamic table");
    //     setData(curData );
    //     // console.log(`hooks data: ${curData}`)
    //     setIsLoading(false);
    // }
    // test();
    return {data,isLoading};
}