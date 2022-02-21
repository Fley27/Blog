import React, {useState, useLayoutEffect} from "react";
import { useRouter } from "next/router";
import EditorEdit from "../../../../admin-panel/pages/editor/edit";
import Content from "../../../../admin-panel/layouts/content";

const EditorEditHome = () =>{ 
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        console.log(id)
        setState(id);
    }, [router.query])
    return(
        <EditorEdit
            id = {state}
        />
    )
}
EditorEditHome.Layout =  Content

export default EditorEditHome