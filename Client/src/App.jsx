import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import data from './data.json'
import { useState } from "react";


function App() {
const [products, setProducts] = useState(data);
const [sort, setSort] = useState("")
const [size, setSize] = useState("")

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
  return (
    <div className="layout">
      <Header/>
      <Main data={products} handleSize={handleSize} size={size} sort={sort} handleSort={handleSort}/>
      <Footer/>
    </div>
  );
}

export default App;
