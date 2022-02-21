import Blog from "./blog";

export default function Drafts (props) {
    return(
        <Blog
            isAvailable = {false}
            id = {props.id}
            route = {props.route}
        />
    )
}