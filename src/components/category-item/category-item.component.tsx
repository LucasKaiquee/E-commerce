import Category from "@/types/categories.types";
import { FunctionComponent } from "react";

import "./category-item.styles.css"

interface CategoryItemProps {
    category: Category
}

const categoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return(
        <div className="category-item-container" style={{background: category.imageUrl}}>
            <div className="category-name-container">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default categoryItem