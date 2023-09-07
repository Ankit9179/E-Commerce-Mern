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
            <div className="flex flex-wrap justify-center">
  {data.map((item, index) => (
    <div className="m-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg shadow-indigo-500/40 p-3 rounded-md" key={index}>
      <img src={item.image} className="w-full h-auto p-2 object-contain" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h2>$ {item.price}</h2>
        <div className="flex justify-between mt-3 sm:mt-5">
          <button
            className="bg-blue-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg mr-1 sm:mr-2"
            onClick={() => { navigation('/product-detail', { state: { product: product[item.id - 1] } }) }}
          >
            More
          </button>
          <button
            className="bg-green-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg ml-1 sm:ml-2"
            onClick={() => dispatch(addItem(item))}
          >
            Add To Cart
          </button>
          <p>★{item.rating.rate}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
    </>;
};

export default ProductsListingPage;

