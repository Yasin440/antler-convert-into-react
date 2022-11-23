import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerMenu } from '../../data/footerData';

const Footer = () => {
    const [subscriberData, setSubscriberData] = useState({ email: '' })
    const handleInput = e => {
        setSubscriberData({
            ...subscriberData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        //make submit form data
        console.log(subscriberData);
    }
    return (
        <footer className="footer">
            <img className="logo-bg logo-footer" src="./img/symbol.svg" alt="logo" />
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        {footerMenu?.map((menu, i) => (
                            <div key={i} className="col-sm-6 col-md-3">
                                <div className="heading">{menu.title}</div>
                                <ul className="footer-menu">
                                    {menu.lists?.map((list, i2) => (
                                        <li key={i2} className="menu-item"><Link to={list.link}>{list.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="col-sm-6 col-md-3">
                            <Link to=''><img className="svg logo-footer d-block" src="./img/logo.svg" alt="logo" /></Link>
                            <Link to=''><img className="svg logo-footer d-none" src="./img/logo-light.svg" alt="logo" /></Link>
                            <div className="copyright">©2022 Antler - All rights reserved</div>
                            <div className="soc-icons">
                                <Link to=""><i className="fab fa-facebook-f withborder noshadow"></i></Link>
                                <Link to=""><i className="fab fa-youtube withborder noshadow"></i></Link>
                                <Link to=""><i className="fab fa-twitter withborder noshadow"></i></Link>
                                <Link to=""><i className="fab fa-instagram withborder noshadow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subcribe news">
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSubmit} className="w-100">
                            <div className="col-md-6 offset-md-3">
                                <div className="general-input">
                                    <input
                                        placeholder='Area do client'
                                        className="fill-input"
                                        type="email"
                                        name="email"
                                        value={subscriberData.email}
                                        onChange={handleInput}
                                        data-i18n="[placeholder]header.login" />
                                    <input
                                        type="submit"
                                        value="SUBSCRIBE"
                                        placeholder='Area do client'
                                        className="btn btn-default-yellow-fill initial-transform" />
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-3 text-center pt-4">
                                <p>Subscribe to our newsletter to receive news and updates</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-menu">
                                <li id="drop-lng" className="btn-group btn-group-toggle">
                                    <label data-lng="en-US" htmlFor="option1" className="btn btn-secondary">
                                        <input
                                            defaultChecked={true}
                                            type="radio"
                                            name="options"
                                            id="option1"
                                        />
                                        EN
                                    </label>
                                    <label data-lng="pt-PT" htmlFor="option2" className="btn btn-secondary">
                                        <input
                                            defaultChecked={false}
                                            type="radio"
                                            name="options"
                                            id="option2"
                                        />
                                        PT
                                    </label>
                                </li>
                                <li className="menu-item by">Hybrid Design With <span className="c-pink">♥</span> by
                                    <Link to="http://inebur.com/" target="_blank" >Inebur</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="payment-list">
                                <li><p>Payments We Accept</p></li>
                                <li><i className="fab fa-cc-paypal"></i></li>
                                <li><i className="fab fa-cc-visa"></i></li>
                                <li><i className="fab fa-cc-mastercard"></i></li>
                                <li><i className="fab fa-cc-apple-pay"></i></li>
                                <li><i className="fab fa-cc-discover"></i></li>
                                <li><i className="fab fa-cc-amazon-pay"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;