import React from 'react'
import '../../css/Products/Products.css'

function Products(props) {
    console.log(props.data);
return (
    <div className='products'>
    {props.data.map((product , indx) => <div className='product' key={indx}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <span>{product.price}</span>
        <br />
        <span>{product.sizes}</span>
        <br />
        <button className='butt'>Add to Cart</button>
        </div>
    )}
    </div>
)
}

export default Products
