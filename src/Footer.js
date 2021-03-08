import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <hr/>
            <div className="footer__textContainer">
                <div className="footer__text">
                    <h3>Get to Know Us</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Get a Smile</p>
                </div>
                <div className="footer__text">
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer__text">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Become an Affiliate</p>
                </div>
                <div className="footer__text">
                    <h3>Let Us Help You</h3>
                    <p>Your Account</p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>
                </div>

            </div>
            <div className="footer__end">
                <img
                className="footer__logo"
                src="https://www.wtvq.com/wp-content/uploads/2020/02/Amazon.jpg"
                />
                <p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div >
            <hr/>
        </div>
    )
}

export default Footer
