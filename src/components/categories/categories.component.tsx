"use client"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

import Category from "@/types/categories.types"
import { db } from "@/config/firebase.config"

import { CategoriesContainer, CategoriesContent } from "./categories.styles"

import CategoryItem from "../category-item/category-item.component"

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])

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
        <CategoriesContainer>
            <CategoriesContent>
                {categories.map((categoryItem) => (
                    <div key={categoryItem.id}>
                        <CategoryItem  category={categoryItem} />
                    </div>) 
                )}  
            </CategoriesContent>
        </CategoriesContainer>
    )
}