import React, { useState, useEffect } from "react"
import './ProductsListingPage.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ProductsListingPage = () => {
    const [product, setProduct] = useState([])
    const navigation = useNavigate( ) //for navigation

    //call get data function for api data
    useEffect(() => {
        getData()
    }, [setProduct])

    //get data function
    const getData = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(product)


    return <>
        <div className="Product-listing-container">
            <h1 className="text-center">Products</h1>
            <div className="Product-card-box">



                {



                    product.map((item, index) => (

                        <div className="card  card-content col-sm-6 " key={index} >
                            <img src={item.image} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h2>$ {item.price}</h2>

                                <div className="ctn-rating">
                                    <button className="btn btn-primary " onClick={()=>{navigation('/product-detail',{state:{product:product[item.id-1]}})}} >More</button>  
                                    <p>★	 {item.rating.rate}</p>
                                </div>

                            </div>
                        </div>


                    ))


                }






            </div>
        </div>
    </>;
};

export default ProductsListingPage;
