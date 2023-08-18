import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { addItem } from "../feature/cartSlice"; // 
import { useDispatch, useSelector } from "react-redux";

const ProductsListingPage = () => {
    const data = useSelector((state)=>state.cartItem.allData)
    const [product, setProduct] = useState([])
    const navigation = useNavigate( ) //for navigation
    const dispatch = useDispatch() //
    //call get data function for data
    useEffect(() => {
        getData()
    }, [setProduct])

    //get data function
    const getData = () => {
       setProduct(data)
    }
    
    return <>
        <div className="mt-24">
            <h1 className="text-center my-10 font-serif text-3xl">Products</h1>
            <div className="flex justify-around flex-wrap align-middle ">
                {
                    data.map((item, index) => (
                        <div className="m-5 w-[25%] col-sm-6 shadow-lg shadow-indigo-500/40 p-5 rounded-md " key={index} >
                            <img src={item.image} className="w-72 h-72 p-2 object-contain" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h2>$ {item.price}</h2>
                                <div className="flex justify-between mt-5">
                                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg  " onClick={()=>{navigation('/product-detail',{state:{product:product[item.id-1]}})}} >More</button>  
                                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg " onClick={()=>dispatch(addItem(item))}>Add To Cart</button>  
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

