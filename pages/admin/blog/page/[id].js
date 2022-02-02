import { useRouter } from "next/router";
import React, {useLayoutEffect, useState} from "react";
import Blog_ from "../../../../admin-panel/pages/blog"
import Content from "../../../../admin-panel/layouts/content";

const Blog = () => {
    const router = useRouter()
    const [state, setState] = useState()
    useLayoutEffect(() => {
        const {id} = router.query;
        setState(id);
    }, [router.query])
    return(
        <Blog_
            id = {state}
        />
    )
}

Blog.Layout =  Content

export default Blog;