import { useRouter } from "next/router";
import React, {useLayoutEffect, useState} from "react";
import  Draft from "../../../../admin-panel/components/draft"
import Content from "../../../../admin-panel/layouts/content";

const DraftsHomePage = () => {
    const router = useRouter()
    const [state, setState] = useState(0)
    useLayoutEffect(() => {
        const {id} = router.query;
        setState(id);
    }, [router.query])
    return(
        <Draft
            id = {state}
        />
    )
}

DraftsHomePage.Layout =  Content

export default DraftsHomePage;