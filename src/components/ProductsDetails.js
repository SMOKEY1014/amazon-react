import React from "react"
import {useParams} from "react-router-dom"

const ProductsDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <h1>Products Details Page</h1>
            <p>{params.id}</p>
        </>
    )
}


export default ProductsDetails