"use client"


import { useEffect, useState } from "react"
import "./categories.styles.css"
import Category from "@/types/categories.types"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase.config"

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

            </div>
        </div>
    )
}