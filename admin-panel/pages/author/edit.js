import Edit from "../../components/user/edit";

export default function AuthorEdit ({id}){
    return(
        id ? (
            <Edit
                title = "Author"
                id = {id}
                link  = "author"
            />
        ): null
    )
}