import Details from "../../components/user/details";

export default function AuthorDetails ({id}){
    return(
        id ? (
            <Details
                title = "Author"
                id = {id}
                link  = "author"
            />
        ): null
    )
}