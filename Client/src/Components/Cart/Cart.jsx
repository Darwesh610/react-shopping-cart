import React from 'react'
import '../../css/Cart/Cart.css'

function Cart(props) {
    let { cart , total , RemoveCart}= props

return (
    <div className='cart text-center d-flex flex-column'>
        <div className="cart-head d-flex justify-content-center align-items-center h-25">{cart.length > 0 ? `There is ${cart.length} Products` : 'Cart is Empty'}</div>
        <hr className='w-50 m-auto my-3' />
        {cart.length > 0 ? cart.map((item , indx) => <div key={indx} className="cart-items w-50 m-auto my-2 d-flex justify-content-between align-items-center">
            <div className="cart-item d-flex justify-content-center align-items-center">
                <img src={item.image} alt="" />
                <div className="cart-info">
                    <div>
                        <p>{item.title}</p>
                        <p>{item.qty}</p>
                        <p>{item.price * item.qty}</p>
                    </div>
                </div>
            </div>
            <div className="butt-Con">
                <div className="btn btn-danger" onClick={() => RemoveCart(item)}>Delete</div>
            </div>
        </div>) : <h3>No Items Add to Cart</h3>}

        <h3>Total : ${total}</h3>

    </div>
)
}

export default Cart