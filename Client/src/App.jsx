import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import data from './data.json'
import { useState } from "react";


function App() {
const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header/>
      <Main data={products}/>
      <Footer/>
    </div>
  );
}

export default App;
