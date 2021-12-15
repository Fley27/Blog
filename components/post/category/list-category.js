import Title from "../../sidebar/header";
import Category from "./category";
import styles from "../../../styles/List-category.module.css"

const Categories = () => (
    <div className = {styles.container}>
        <Title
            text = "Category"
        />
        <div className = {styles.list}>
            <Category
                category = "Beauté"
                postNumber = "47"
            />
            <Category
                category = "Mode"
                postNumber = "89"
            />
            <Category
                category = "Sexo"
                postNumber = "29"
            />
            <Category
                category = "Jobs et Études"
                postNumber = "18"
            />
            <Category
                category = "Lifestyle"
                postNumber = "125"
            />
            <Category
                category = "Technologie"
                postNumber = "59"
            />
            <Category
                category = "Bon Plans"
                postNumber = "89"
            />
        </div>
    </div>  
)

export default Categories;