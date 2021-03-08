import React from 'react';
import './Home.css';
import Product from './Product'
import Footer from './Footer'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://i.insider.com/5f873a22ea23a5001903d610?width=1136&format=jpeg"
                alt=""
                />
            <div className="home__container">
                <div className="home__row">
                    <Product 
                    id={1}
                    title="The lean startup" 
                    price={21.00} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL.jpg" 
                    rating={4} />
                    <Product 
                    id={2}
                    title="Apple watch" 
                    price={999} 
                    image="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/05/apple-watch-series-44-mm-black.png" 
                    rating={5}
                    />
                    
                </div>
                <div className="home__row">
                <Product 
                id={3}
                title="Bluetooth Speaker" 
                price={499.99} 
                image="https://5.imimg.com/data5/XQ/CM/RW/SELLER-82344205/amazon-echo-plus-500x500.jpg" 
                rating={3}
                />
                <Product 
                id={4}
                title="Acer Laptop" 
                price={1500} 
                image="https://static.acer.com/up/Resource/Acer/Laptops/Swift_3/Image/20201014/Acer-Swift-3_SF313-53-53G_FP-Backlit_Silver_modelpreview.png" 
                rating={4}
                />
                <Product 
                id={5}
                title="Power torch" 
                price={99.99} 
                image="https://5.imimg.com/data5/XG/BN/MY-44436734/rechargeable-led-torch-light-500x500.jpg" 
                rating={4}
                />
                </div>
                <div className="home__row">
                <Product 
                id={6}
                title="Iphone 12" 
                price={1299.99} 
                image="https://specials-images.forbesimg.com/imageserve/5f766465171081b47b0e73ad/960x0.jpg?fit=scale" 
                rating={5}
                />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
