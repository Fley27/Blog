import React, {useState, useLayoutEffect} from "react";
import { useRouter } from "next/router";
import AuthorDetails from "../../../admin-panel/pages/author/details";
import Content from "../../../admin-panel/layouts/content";

const AuthorDetailsHome = () =>{ 
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        console.log(id)
        setState(id);
    }, [router.query])
    return(
        <AuthorDetails
            id = {state}
        />
    )
}
AuthorDetailsHome.Layout =  Content

export default AuthorDetailsHome;