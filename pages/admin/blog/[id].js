import { useRouter } from "next/router";
import React, {useLayoutEffect, useState} from "react";
import  Detail from "../../../admin-panel/components/blog/details"
import Content from "../../../admin-panel/layouts/content";

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

Details.Layout =  Content

export default Details;