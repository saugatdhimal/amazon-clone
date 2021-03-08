import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Footer from './Footer';

function Checkout() {
    const [ { basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__leftRight">
            <div className="checkout__left">
                {/* <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
                alt=""
                /> */}
                <div className="checkout__title">
                    <h3 >{user?.email}</h3>
                    <h2 >
                       Your Shopping Basket
                    </h2>
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
        <div className="checkout__products">
        {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
        </div>
        <Footer />
        </div>
        
    )
}

export default Checkout
