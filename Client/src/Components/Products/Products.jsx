import React, { useState } from 'react'
import '../../css/Products/Products.css'
import Modal from 'react-modal'

function Products(props) {
    const [product, setProduct] = useState("")

    const openModal = (product) => {
        setProduct(product)
    }
    const closeModel = () => {
        setProduct('')
    }
return (
    <div className='products'>
    {props.data.map((product , indx) => <div className='product' key={indx}>
        <a href="#" onClick={() => openModal(product)}>
        <img className='image' src={product.image} alt={product.title} />
        </a>
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <span>{product.price}</span>
        <br />
        <span>{product.sizes}</span>
        <br />
        <button className='butt'>Add to Cart</button>
        </div>
    )}

    <Modal isOpen={product} onRequestClose={closeModel}>
        <span className='close' onClick={closeModel}>&times; </span>
        <div className="product-info">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <span>{product.price}</span>
        <br />
        <span>{product.sizes}</span>
        </div>
    </Modal>
    </div>
)
}

export default Products
