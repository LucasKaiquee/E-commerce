"use client"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

import Category from "@/types/categories.types"
import { db } from "@/config/firebase.config"

import "./categories.styles.css"
import CategoryItem from "../category-item/category-item.component"

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])

    console.log(categories)
    const fetchCategories = async () => {
        try {
            const categoriesFromFirestore: Category[] = []
            const querySnapshot = await getDocs(collection(db, "categories"))
            
            querySnapshot.forEach((doc: any) => {
                categoriesFromFirestore.push(doc.data())
            })

            setCategories(categoriesFromFirestore)

        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return(
        <div className="categories-container">
            <div className="categories-content">
                {categories.map((categoryItem, key) => <CategoryItem key={key} category={categoryItem} />)}  
            </div>
        </div>
    )
}