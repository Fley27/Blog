import Blog from "./blog";

export default function Post (props) {
    return(
        <Blog
            isAvailable = {true}
            id = {props.id}
            route = {props.route}
        />
    )
}