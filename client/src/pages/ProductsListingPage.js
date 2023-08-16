import React, { useState, useEffect } from "react"
// import './ProductsListingPage.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { addItem } from "../feature/cartSlice"; // 
import { useDispatch } from "react-redux";

const ProductsListingPage = () => {
    const [product, setProduct] = useState([])
    const navigation = useNavigate( ) //for navigation
    const dispatch = useDispatch() //
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
    //add items in your cart
    const handleAddItem = (product) => {
        dispatch(addItem(product)) //send product in our cart
    }
    return <>
        <div className="mt-24">
            <h1 className="text-center my-10 font-serif text-3xl">Products</h1>
            <div className="flex justify-around flex-wrap align-middle ">
                {
                    product.map((item, index) => (
                        <div className="m-5 w-[25%] col-sm-6 shadow-lg shadow-indigo-500/40 p-5 rounded-md " key={index} >
                            <img src={item.image} className="w-72 h-72 p-2 object-contain" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h2>$ {item.price}</h2>
                                <div className="flex justify-between mt-5">
                                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg  " onClick={()=>{navigation('/product-detail',{state:{product:product[item.id-1]}})}} >More</button>  
                                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg "onClick={()=>handleAddItem(item)}>Add To Cart</button>  
                                    <p>★{item.rating.rate}</p>
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

