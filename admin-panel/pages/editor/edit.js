import Edit from "../../components/user/edit";

export default function EditorEdit ({id}){
    return(
        id ? (
            <Edit
                title = "Author"
                id = {id}
                link  = "editor"
            />
        ): null
    )
}