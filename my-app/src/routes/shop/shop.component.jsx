// import SHOP_DATA from "../../shopdata.json"
// import {CategoriesContext} from "../../contexts/categories.context"
// import {useContext} from 'react'
// import CategoryPreview from "../../components/category-preview/category-preview.component"
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from "../categories-preview/categories-preview.component"
import "./shop.styles.scss"

const Shop = () =>{
    // const {categoriesMap} = useContext(CategoriesContext)
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
        </Routes>
    )

        // <div className="shop-container">
        //  {
        //     Object.keys(categoriesMap).map( title => {
        //         const products = categoriesMap[title]
        //         return <CategoryPreview key={title} title={title} products={products} />
        //     }
        //     )
        // }   
        // </div> 
    
}

export default Shop