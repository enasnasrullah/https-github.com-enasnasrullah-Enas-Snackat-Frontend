import React from 'react'
import Cart from '../../Components/Cart'
import Products from '../../Components/Products'

const Home = () => {
  return (
   <div className='container'>
   <h1>Shop Now</h1>
   <div className="row">
    <div className="col-md-6">
        <Products/> 
    </div>
    <div className="col-md-6">
        <Cart/>
    </div>
   </div>
   </div>
  )
}

export default Home
