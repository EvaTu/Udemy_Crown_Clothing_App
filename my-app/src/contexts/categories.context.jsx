import {createContext, useState, useEffect} from 'react'

//import {addCollectionAndDocuments} from "../utils/firebase/firebase.utils"
// import SHOP_DATA from "../shop-data.js"

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
    categoriesMap: {},
    
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    // const value = {products}

    useEffect(()=>{
        const getCategoriesMap = async() =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])

    const value = {categoriesMap}

    // useEffect(()=>{
    //     addCollectionAndDocuments("category", SHOP_DATA)
    // },[])
    //Above only need to invoke once to upload data to firebase server
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}