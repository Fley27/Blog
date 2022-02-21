import { useRouter } from "next/router";
import React, {useLayoutEffect, useState} from "react";
import  Detail from "../components//post/details"

const Details = () => {
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        console.log(id)
        setState(id);
    }, [router.query])
    return (
        state ?(
            <Detail
                id = {state}
            />
        ): null
    )
}


export default Details;