import { useEffect, useState } from "react";

export function useGetData<T>(func: Promise<T[]> ) {
    const [data, setData] = useState<undefined  |Array<T>>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        (async () =>{
            const curData = await func; // async function
            console.log("get data function in dynamic table");
            setData(curData as Array<T>);
            // console.log(`hooks data: ${curData}`)
            setIsLoading(false);
        })();
        
   },[]);
    return {data,isLoading};
}