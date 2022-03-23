import React from 'react'
import '../../css/Main/Main.css'
import Products from '../Products/Products';
import Filter from '../Filter/Filter';
import Cart from '../Cart/Cart';

function Main(props) {
  return ( <>
    <div className='row flex-wrap g-3'>
    <Products  data={props.data} addToCart={props.addToCart} SumTotal={props.SumTotal}/>
    <Filter props={props}/>
    <Cart total={props.total} cart={props.cart} RemoveCart={props.RemoveCart}/>
    </div>
    </>
  )
}

export default Main