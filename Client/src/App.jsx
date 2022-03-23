import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import data from './data.json'
import { useEffect, useState } from "react";


function App() {
const [products, setProducts] = useState(data);
const [sort, setSort] = useState("")
const [size, setSize] = useState("")
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
const [total, settotal] = useState('')

function SumTotal() {
  if (cart.length > 0) {
    let prices = [];
    cart.map((e) => {
      prices.push(e.price * e.qty)
    })
    let newCart = prices.reduce((a , e) => {
      return a + e
    })
    settotal(newCart);
  }else {
    settotal('');
  }

}

const handleSize = (e) => {
  const NewProducts = [...data]
  setSize(e.target.value);
  if(e.target.value === "All"){
    return setProducts(data);
  }else {
  let productsClone = NewProducts.filter( p => p.sizes.indexOf(e.target.value) !== -1)
  console.log(productsClone);
    return setProducts(productsClone);
}
}
const handleSort = (e) => {
  const NewProducts = [...data]
  let order = e.target.value;
  setSort(order);
  let ProductsClone = NewProducts.sort((a , b) => {
    if(order === "Lowest"){
      return a.price - b.price
    }else if(order === "Heighest") { 
      return b.price - a.price
    }else {
      return a.id < b.id ? 1 : -1
    }
  })
  setProducts(ProductsClone);
}

const addToCart = (e) => {
  let newCart = [...cart]
  if(newCart.indexOf(e) !== -1){
    ++e.qty
    setCart(newCart)
  }else {
    newCart.push(e)
    setCart(newCart)
  }
}

const RemoveCart = (product) => {
  let newCart = [...cart]
  setCart(newCart.filter(p => p.id !== product.id))
}

useEffect(() => {
  localStorage.setItem('cart' , JSON.stringify(cart))
  SumTotal();
}, [cart])
  return (<>
    <div className="layout">
      <Header/>
      <Main total={total} RemoveCart={RemoveCart} data={products} handleSize={handleSize} size={size} sort={sort} handleSort={handleSort} cart={cart} addToCart={addToCart}/>
    </div>
      <Footer/>
      </>
  );
}

export default App;
