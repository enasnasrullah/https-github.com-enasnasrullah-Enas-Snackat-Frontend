import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    getProductsRequest
  } from "../../Store/Products/Actions";

const Products = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.Products.list);
    console.log(list)
   useEffect(()=>{
    dispatch(getProductsRequest())
}, [])
  return (
    <div>
        <h2>Products</h2>
        <div className="row">
            {list.map((product, index)=>(
                <div className="p-3 col-md-6 ">
                  <div className='card p-4 '>
                   <img src={product.image} className='img-fluid'/>
                   <h3>{product.title}</h3>
                   <p className='d-flex justify-content-between align-items-center '>
                    <p>{product.price}</p>
                    <p>{product.rating.rate} / {product.rating.count}</p>
                   </p>
                  <button onClick={()=>{console.log("test")}}>Add to cart</button>
                 </div>
                </div>
          
            ))}
            <div className="col-md-6"></div>
        </div>
    </div>
  )
}

export default Products