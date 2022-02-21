import React, {useState, useLayoutEffect} from "react";
import { useRouter } from "next/router";
import AuthorEdit from "../../../../admin-panel/pages/author/edit";
import Content from "../../../../admin-panel/layouts/content";

const AuthorEditHome = () =>{ 
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        console.log(id)
        setState(id);
    }, [router.query])
    return(
        <AuthorEdit
            id = {state}
        />
    )
}
AuthorEditHome.Layout =  Content

export default AuthorEditHome;