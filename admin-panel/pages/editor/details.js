import Details from "../../components/user/details";

export default function EditorDetails ({id}){
    return(
        id ?(
            <Details
                title = "Editor"
                id = {id}
                link  = "editor"
            />
        ): null
    )
}
