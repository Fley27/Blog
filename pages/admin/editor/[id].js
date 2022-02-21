import React, {useState, useLayoutEffect} from "react";
import { useRouter } from "next/router";
import EditorDetails from "../../../admin-panel/pages/editor/details";
import Content from "../../../admin-panel/layouts/content";

const EditorDetailsHome = () => {
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        console.log(id)
        setState(id);
    }, [router.query])
    return(
        <EditorDetails
            id = {state}
        />
    )
}

EditorDetailsHome.Layout =  Content

export default EditorDetailsHome;