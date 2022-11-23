import React from 'react';
import { NavLink } from 'react-router-dom';
import { support_sub_list } from '../../data/headerData';

const DesktopMenu = () => {
    return (
        <div className="menu-wrap">
            <div className="nav-menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2 col-md-2">
                            <NavLink to="index">
                                <img className="svg logo-menu d-block" src='./img/logo.svg' alt="logo Antler" />
                                <img className="svg logo-menu d-none" src='./img/logo-light.svg' alt="logo Antler" />
                            </NavLink>
                        </div>
                        <nav id="menu" className="col-10 col-md-10">
                            <div className="navigation float-end">
                                <button className="menu-toggle">
                                    <span className="icon"></span>
                                    <span className="icon"></span>
                                    <span className="icon"></span>
                                </button>
                                <ul className="main-menu nav navbar-nav navbar-right">
                                    <li className="menu-item menu-item-has-children me-2">
                                        <NavLink className="m-0 pe-1 v-stroke" to="#" data-i18n="[html]header.home">Case</NavLink>
                                        <div className="badge bg-pink me-4 wow animated shake delay-1s visible">NEW</div>
                                        <ul className="sub-menu dropdown bg-colorstyle">
                                            <li className="menu-item"><NavLink className="mergecolor" to="/about-us" data-i18n="[html]submenu.homedefault">About Us</NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="/contact-us" data-i18n="[html]submenu.homevideo">Contact Us</NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="/home" data-i18n="[html]submenu.homeimage">Home</NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="homegaming" data-i18n="[html]submenu.homegaming">
                                            </NavLink>
                                                <div className="menu badge feat bg-purple">NEW</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="home3d" data-i18n="[html]submenu.home3d"> </NavLink>
                                                <div className="menu badge feat bg-purple">NEW</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor"
                                                to="http://inebur.com/whmcs/?systpl=antler&carttpl=antler&language=arabic" target="_blank" >WHMCS
                                                (RTL) </NavLink>
                                                <div className="menu badge feat bg-pink">HOT</div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children me-2">
                                        <NavLink className="m-0 pe-1 v-stroke" to="#" data-i18n="[html]header.services"> </NavLink>
                                        <div className="badge bg-pink me-4">PRO</div>
                                        <div className="sub-menu menu-large bg-colorstyle">
                                            <div className="service-list">
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/cloudfiber.svg" alt="Shared Hosting" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="hosting" data-i18n="[html]submenu.hosting"> </NavLink>
                                                        <p className="seccolor">Sed ut perspiciatis unde omnis iste natus</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/reseller.svg" alt="Cloud Reseller" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="reseller" data-i18n="[html]submenu.reseller"> </NavLink>
                                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/dedicated.svg" alt="Dedicated Server" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="dedicated" data-i18n="[html]submenu.dedicated"> </NavLink>
                                                        <div className="menu badge feat bg-pink">FILTER</div>
                                                        <p className="seccolor">But I must explain to you how all this</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/vps.svg" alt="Cloud VPS" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="vps" data-i18n="[html]submenu.vps"> </NavLink>
                                                        <div className="menu badge feat bg-grey">SSD</div>
                                                        <p className="seccolor">At vero eos et accusamus et iusto odio</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/wordpress.svg" alt="WordPress Hosting" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="wordpress" data-i18n="[html]submenu.wordpress"> </NavLink>
                                                        <p className="seccolor">On the other hand, we denounce with</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/domains.svg" alt="Domains" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="domains" data-i18n="[html]submenu.domains"> </NavLink>
                                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur</p>
                                                    </div>
                                                </div>
                                                <div className="service">
                                                    <img className="svg" src="./img/svg/code.svg" alt="Developer Hosting" />
                                                    <div className="media-body">
                                                        <NavLink className="menu-item mergecolor" to="developer" data-i18n="[html]submenu.developer"> </NavLink>
                                                        <p className="seccolor">ed ut perspiciatis unde omnis iste natus</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <NavLink className="v-stroke" to="#" data-i18n="[html]header.pages"> </NavLink>
                                        <div className="sub-menu megamenu-list">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="service-list col-md-9 bg-colorstyle">
                                                        <div className="row">
                                                            <div className="col-4 service">
                                                                <div className="media-body">
                                                                    <div className="top-head">
                                                                        <img className="svg" src="./img/svg/favorite.svg" alt="Services" />
                                                                        <div className="menu-item c-grey mergecolor" data-i18n="[html]submenu.services"> </div>
                                                                    </div>
                                                                    <hr />
                                                                    <ul>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="emailsecurity"
                                                                            data-i18n="[html]submenu.emailsecurity"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="ssl" data-i18n="[html]submenu.ssl">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="email"
                                                                            data-i18n="[html]submenu.email"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="magento"
                                                                            data-i18n="[html]submenu.magento"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="gsuite"
                                                                            data-i18n="[html]submenu.gsuite"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="iptv" data-i18n="[html]submenu.iptv">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="gaming"
                                                                            data-i18n="[html]submenu.gaming"> </NavLink>
                                                                            <div className="badge inside bg-pink">NEW</div>
                                                                        </li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="radiostream"
                                                                            data-i18n="[html]submenu.radiostream"> </NavLink>
                                                                            <div className="badge inside bg-pink">NEW</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-4 service">
                                                                <div className="media-body">
                                                                    <div className="top-head">
                                                                        <img className="svg" src="./img/svg/infrastructure.svg" alt="Infrastructure" />
                                                                        <div className="menu-item c-grey mergecolor" data-i18n="[html]submenu.infrastructure">
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <ul>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="ddos" data-i18n="[html]submenu.ddos">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="datacenter"
                                                                            data-i18n="[html]submenu.datacenter"> </NavLink>
                                                                            <div className="badge inside bg-grey">TOP</div>
                                                                        </li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="about"
                                                                            data-i18n="[html]submenu.about"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="database"
                                                                            data-i18n="[html]submenu.database"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="elements"
                                                                            data-i18n="[html]submenu.elements"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="voip" data-i18n="[html]submenu.voip">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="voice"
                                                                            data-i18n="[html]submenu.voice"> </NavLink>
                                                                            <div className="badge inside bg-pink">NEW</div>
                                                                        </li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="seo" data-i18n="[html]submenu.seo">
                                                                        </NavLink>
                                                                            <div className="badge inside bg-pink">NEW</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-4 service">
                                                                <div className="media-body">
                                                                    <div className="top-head">
                                                                        <img className="svg" src="./img/svg/global.svg" alt="Global" />
                                                                        <div className="menu-item c-grey mergecolor" data-i18n="[html]submenu.others"> </div>
                                                                    </div>
                                                                    <hr />
                                                                    <ul>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="payments"
                                                                            data-i18n="[html]submenu.payments"> </NavLink>
                                                                            <div className="badge inside bg-pink">NEW</div>
                                                                        </li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="configurator"
                                                                            data-i18n="[html]submenu.config"> </NavLink>
                                                                            <div className="badge inside bg-grey">HOT</div>
                                                                        </li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="cart" data-i18n="[html]submenu.cart">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="blog-grid"
                                                                            data-i18n="[html]submenu.bloggrid"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="checkout"
                                                                            data-i18n="[html]submenu.checkout"> </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="soon" data-i18n="[html]submenu.soon">
                                                                        </NavLink></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="promos"
                                                                            data-i18n="[html]submenu.promos"> </NavLink> <i className="fas fa-tags c-pink ms-2"></i></li>
                                                                        <li className="menu-item"><NavLink className="mergecolor" to="blackfriday"
                                                                            data-i18n="[html]submenu.blackfriday"> </NavLink>
                                                                            <div className="badge inside bg-pink">HOT</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="start-offer col-md-3">
                                                        <div className="inner">
                                                            <h4 className="title my-3">Cloud VPS SSD <br />Get 50% Discount</h4>
                                                            <div className="inner-content mb-4">Enjoy increased flexibility and get the performance you need
                                                                with SSD Storage.</div>
                                                            <span className="m-0">Before <del className="c-pink">$20.00 /mo</del></span><br />
                                                            <h4 className="m-0"><b>Now</b> <b className="c-pink">$9.99 /mo</b></h4>
                                                            <NavLink to="vps" className="btn btn-default-pink-fill mt-4">See Plans</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <NavLink className="v-stroke" to="#" data-i18n="[html]header.features">Recursos</NavLink>
                                        <ul className="sub-menu bg-colorstyle">
                                            <li className="menu-item"><NavLink className="mergecolor"
                                                to="http://inebur.com/whmcs/?systpl=antler&carttpl=antler" target="_blank"
                                                data-i18n="[html]submenu.whmcs"> </NavLink>
                                                <div className="menu badge feat bg-pink">HOT</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor"
                                                to="http://inebur.com/whmcs/index.php/store/shared-hosting/?systpl=antler&carttpl=antler"
                                                target="_blank" data-i18n="[html]submenu.orderform"> </NavLink>
                                                <div className="menu badge feat bg-grey">TOP</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="http://inebur.com/antler/email/" target="_blank"
                                                data-i18n="[html]submenu.whmcsemail"> </NavLink>
                                                <div className="menu badge feat bg-grey">TOP</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="http://inebur.com/antler/newsletter/"
                                                target="_blank" data-i18n="[html]submenu.whmcsnewsletter"> </NavLink>
                                                <div className="menu badge feat bg-grey">TOP</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="pricing" data-i18n="[html]submenu.pricing"> </NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="sliders" data-i18n="[html]submenu.sliders"> </NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="configurator" data-i18n="[html]submenu.config"> </NavLink>
                                                <div className="menu badge feat bg-pink">NEW</div>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="404" data-i18n="[html]submenu.error"> </NavLink></li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="login" data-i18n="[html]submenu.register"> </NavLink></li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="login" data-i18n="[html]header.login"> </NavLink></li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="elements" data-i18n="[html]submenu.elements"> </NavLink>
                                            </li>
                                            <li className="menu-item"><NavLink className="mergecolor" to="sections" data-i18n="[html]submenu.sections"> </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children menu-last">
                                        <NavLink className="v-stroke" to="#" data-i18n="[html]header.support">Suport</NavLink>
                                        <div className="sub-menu megamenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="service-list col-md-9 bg-colorstyle">
                                                        <div className="row">
                                                            {support_sub_list.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="col-4 service">
                                                                        <div className="media-left">
                                                                            <img className="svg" src={item.img} alt="Knowledgebase" />
                                                                        </div>
                                                                        <div className="media-body">
                                                                            <NavLink className="menu-item mergecolor" to={item.url}
                                                                                data-i18n="[html]submenu.knowlist">{item.name}</NavLink>
                                                                            {item.batch !== null && <div className={`badge inside ${item.batch_color} ms-1`}>{item.batch}</div>}
                                                                            <p className="seccolor">{item.details}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="start-offer col-md-3">
                                                        <div className="inner">
                                                            <h4 className="title my-3">Support Premium</h4>
                                                            <div className="inner-content"><span>Call us:</span> <b>+ (123) 1300-656-1046</b> HeadQuarters -
                                                                No.01 - 399-0 Lorem Street City Melbourne</div>
                                                            <NavLink to="contact" className="btn btn-default-yellow-fill mt-4">Contact Us</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="tech-box">
                                        <img className="svg" src="./img/menu.svg" alt="" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" />
                                    </div>
                                    <li className="menu-item">
                                        <NavLink className="pe-0 me-0" to="login">
                                            <div className="btn btn-default-yellow-fill question"><span data-i18n="[html]header.login"></span> <i
                                                className="fas fa-lock ps-1"></i> </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopMenu;