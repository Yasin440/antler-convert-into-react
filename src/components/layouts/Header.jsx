
import React from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from '../headers/DesktopMenu';

const Header = () => {
    return (
        <div id="header">
            <div className="sec-bg3 infonews">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-6 news">
                            <span className="badge bg-purple me-2">news</span>
                            <span>SSD Storage with increased flexibility.</span>
                            <span> <Link className="c-yellow" to="vps">Cloud Overview <i className="fas fa-arrow-circle-right"></i></Link></span>
                        </div>
                        <div className="col-6 col-md-6 link">
                            <div className="infonews-nav float-end">
                                <Link to="blog-details" title="Blog" className="iconews"><i className="ico-message-content f-18 w-icon"></i></Link>
                                <Link to="contact" title="Contact Us" className="iconews"><i className="ico-bell f-18 w-icon"></i></Link>
                                <Link to="login" title="Login" className="iconews"><i className="ico-shopping-cart f-18 w-icon"></i></Link>
                                <Link to="tel:1300-656-1046" className="iconews tabphone">+ (123) 1300-656-1046</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** NAV MENU DESKTOP ****** --> */}
            <DesktopMenu />
            {/* <!-- ***** NAV MENU MOBILE ****** --> */}
            <div className="menu-wrap mobile">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to="index"><img className="svg logo-menu d-block" src="../../style/img/logo.svg" alt="logo Antler" /></Link>
                            <Link to="index"><img className="svg logo-menu d-none" src="../../style/img/logo-light.svg" alt="logo Antler" /></Link>
                        </div>
                        <div className="col-6">
                            <nav className="nav-menu float-end d-flex">
                                <div className="tech-box">
                                    <img className="svg" src="../../style/img/menu.svg" alt="" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" />
                                </div>
                                <button id="nav-toggle" className="menu-toggle">
                                    <span className="icon"></span>
                                    <span className="icon"></span>
                                    <span className="icon"></span>
                                </button>
                                <div className="main-menu bg-seccolorstyle">
                                    <div className="menu-item">
                                        <Link className="mergecolor" to="#" data-bs-toggle="dropdown">Home <div className="badge bg-purple">NEW</div></Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item menu-item" to="index">Home Default</Link>
                                            <Link className="dropdown-item menu-item" to="homevideo">Home Video</Link>
                                            <Link className="dropdown-item menu-item" to="homeimage">Home Image</Link>
                                            <Link className="dropdown-item menu-item" to="homegaming">Home Gaming <div
                                                className="badge inside bg-purple ms-2">NEW</div></Link>
                                            <Link className="dropdown-item menu-item" to="home3d">Home 3D <div className="badge inside bg-purple ms-2">NEW
                                            </div></Link>
                                            <Link className="dropdown-item menu-item" to="http://inebur.com/whmcs/?systpl=antler-rtl&language=arabic"
                                                target="_blank" >WHMCS (RTL)
                                                <div className="badge inside bg-pink ms-2">HOT</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <Link className="mergecolor" to="#" data-bs-toggle="dropdown">Hosting <div className="badge bg-purple">PRO</div>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item menu-item" to="hosting">Shared Hosting</Link>
                                            <Link className="dropdown-item menu-item" to="reseller">Cloud Reseller</Link>
                                            <Link className="dropdown-item menu-item" to="dedicated">Dedicated Server</Link>
                                            <Link className="dropdown-item menu-item" to="vps">Cloud VPS</Link>
                                            <Link className="dropdown-item menu-item" to="wordpress">WordPress Hosting</Link>
                                            <Link className="dropdown-item menu-item" to="domains">Domain Names</Link>
                                            <Link className="dropdown-item menu-item" to="developer">Developer Hosting</Link>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <Link className="mergecolor" to="#" data-bs-toggle="dropdown">Pages</Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item menu-item" to="emailsecurity">Email Security</Link>
                                            <Link className="dropdown-item menu-item" to="ssl">SSL Certificates</Link>
                                            <Link className="dropdown-item menu-item" to="email">Enterprise Email</Link>
                                            <Link className="dropdown-item menu-item" to="magento">Magento Pro</Link>
                                            <Link className="dropdown-item menu-item" to="gsuite"> Suite - Google</Link>
                                            <Link className="dropdown-item menu-item" to="iptv">IPTV System</Link>
                                            <Link className="dropdown-item menu-item" to="gaming">Gaming Server</Link>
                                            <Link className="dropdown-item menu-item" to="radiostream">Radio Stream <div
                                                className="badge inside bg-pink ms-2">NEW</div></Link>
                                            <Link className="dropdown-item menu-item" to="ddos">DDoS Protection</Link>
                                            <Link className="dropdown-item menu-item" to="datacenter">Datacenter <div className="badge inside bg-grey ms-2">
                                                TOP</div></Link>
                                            <Link className="dropdown-item menu-item" to="about">About Us</Link>
                                            <Link className="dropdown-item menu-item" to="database">Database-as-a-Service</Link>
                                            <Link className="dropdown-item menu-item" to="elements">Elements</Link>
                                            <Link className="dropdown-item menu-item" to="voip">Virtual Numbers</Link>
                                            <Link className="dropdown-item menu-item" to="voice">Voice Server <div className="badge inside bg-pink ms-2">NEW
                                            </div></Link>
                                            <Link className="dropdown-item menu-item" to="seo">Managed SEO Services <div
                                                className="badge inside bg-pink ms-2">NEW</div></Link>
                                            <Link className="dropdown-item menu-item" to="payments">Payment Methods <div
                                                className="badge inside bg-pink ms-2">NEW</div></Link>
                                            <Link className="dropdown-item menu-item" to="configurator">Configurator <div
                                                className="badge inside bg-grey ms-2">HOT</div></Link>
                                            <Link className="dropdown-item menu-item" to="cart">Cart</Link>
                                            <Link className="dropdown-item menu-item" to="checkout">Checkout</Link>
                                            <Link className="dropdown-item menu-item" to="soon">Coming Soon</Link>
                                            <Link className="dropdown-item menu-item" to="promos">Promotions</Link>
                                            <Link className="dropdown-item menu-item" to="blackfriday">Blackfriday <div
                                                className="badge inside bg-pink ms-2">HOT</div></Link>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <Link className="mergecolor" to="#" data-bs-toggle="dropdown">Features</Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item menu-item" to="http://inebur.com/whmcs/?systpl=antler" target="_blank" >WHMCS
                                                Template <div className="badge inside bg-pink">HOT</div></Link>
                                            <Link className="dropdown-item menu-item" to="http://inebur.com/whmcs/cart.php?carttpl=antler&systpl=antler"
                                                target="_blank" >Order Form Template <div className="badge inside bg-grey">TOP</div></Link>
                                            <Link className="dropdown-item menu-item" to="http://inebur.com/antler/email/" target="_blank" >HMCS Email
                                                Template <div className="badge inside bg-grey">TOP</div></Link>
                                            <Link className="dropdown-item menu-item" to="http://inebur.com/antler/newsletter/" target="_blank" >WHMCS
                                                Newsletter Template <div className="badge inside bg-grey">TOP</div></Link>
                                            <Link className="dropdown-item menu-item" to="pricing">Pricing Options</Link>
                                            <Link className="dropdown-item menu-item" to="sliders">Content Sliders</Link>
                                            <Link className="dropdown-item menu-item" to="configurator">Configurator</Link>
                                            <Link className="dropdown-item menu-item" to="404">404 Error</Link>
                                            <Link className="dropdown-item menu-item" to="login">Register</Link>
                                            <Link className="dropdown-item menu-item" to="login">Client Area</Link>
                                            <Link className="dropdown-item menu-item" to="elements">Elements</Link>
                                            <Link className="dropdown-item menu-item" to="sections">Sections</Link>
                                        </div>
                                    </div>
                                    <div className="menu-item menu-last">
                                        <Link className="mergecolor" to="#" data-bs-toggle="dropdown">Support</Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item menu-item" to="knowledgebase-list">Knowlege List</Link>
                                            <Link className="dropdown-item menu-item" to="knowledgebase-article">Knowlege Article</Link>
                                            <Link className="dropdown-item menu-item" to="contact">Contact Us</Link>
                                            <Link className="dropdown-item menu-item" to="legal">Legal</Link>
                                            <Link className="dropdown-item menu-item" to="blog-details">Blog</Link>
                                            <Link className="dropdown-item menu-item" to="faq">Faq</Link>
                                        </div>
                                    </div>
                                    <div className="float-start w-100 mt-3">
                                        <p className="c-grey-light seccolor"> <small> Phone: + (123) 1300-656-1046</small> </p>
                                        <p className="c-grey-light seccolor"><small>Email: antler@mail.com</small> </p>
                                    </div>
                                    <div>
                                        <Link to="login">
                                            <div className="btn btn-default-yellow-fill mt-3">CLIENT AREA</div>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Sidebar ****** --> */}
            <div className="offcanvas offcanvas-start offcanvas-box bg-colorstyle" tabIndex="-1" id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title mergecolor" id="offcanvasWithBackdropLabel">Special Deals</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row mb-4">
                        <h6 className="mergecolor">Free Trials</h6>
                        <div className="col">
                            <Link to="hosting">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-purple">free migration</div>
                                    <img src="../../style/img/topbanner05.jpg" className="card-img-top" alt="Shared Hosting" />
                                    <div className="card-body">
                                        <h6 className="card-title text-dark mergecolor">Shared Hosting</h6>
                                        <p className="card-text text-dark seccolor"><small>Blazing fast & stable hosting infrastructure</small></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="emailsecurity">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-purple">free test</div>
                                    <img src="../../style/img/topbanner03.jpg" className="card-img-top" alt="Email Security" />
                                    <div className="card-body">
                                        <h6 className="card-title text-dark mergecolor">Email Security</h6>
                                        <p className="card-text text-dark seccolor"><small>Powerful protection for emails with intelligent
                                            cluster</small></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h6 className="mergecolor">Special Promotions</h6>
                        <div className="col-md-6">
                            <Link to="hosting">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-grey">50%</div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="svg img-fluid rounded-start" src="../../style/fonts/svg/cloudfiber.svg" alt="Shared Hosting" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title text-dark mergecolor">Hosting</h6>
                                                <p className="card-text text-dark seccolor"><small>Storage SSD, CloudLinux, cPanel..</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="domains">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-grey">$0.77</div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="svg img-fluid rounded-start" src="../../style/fonts/svg/domains.svg" alt="Email Security" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title text-dark mergecolor">Domains</h6>
                                                <p className="card-text text-dark seccolor"><small>More than 900 domains extensions..</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="gsuite">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-purple">55%</div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="svg img-fluid rounded-start" src="../../style/fonts/svg/docbox.svg" alt="G Suite Google" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title text-dark mergecolor">G Suite</h6>
                                                <p className="card-text text-dark seccolor"><small>Email, Chat, Apps, Cloud Storage..</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="ssl">
                                <div className="card mb-4 b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                                    <div className="plans badge feat bg-purple">35%</div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="svg img-fluid rounded-start" src="../../style/fonts/svg/privacy.svg" alt="Wilcard SSL" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title text-dark mergecolor">Wilcard</h6>
                                                <p className="card-text text-dark seccolor"><small>Security, credibility and trust visitors..</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h6 className="mergecolor">Flexible Operating Systems</h6>
                        <p className="seccolor"><small>Install over +300 scripts and apps instantly with our auto installer.</small></p>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/centos.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Centos</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/debian.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Debian</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/docker.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Docker</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/drupal.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Drupal</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/cpanel.svg" alt="Centos" />
                                <p className="mb-0 seccolor">cPanel</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/fedora.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Fedora</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/gitlab.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Gitlab</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/joomla.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Joomla</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/joomla.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Lamp</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/magento.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Magento</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/openvpn.svg" alt="Centos" />
                                <p className="mb-0 seccolor">VPN</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/owncloud.svg" alt="Centos" />
                                <p className="mb-0 seccolor">OWN</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/prestashop.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Presta</p>
                            </Link>
                        </div>
                        <div className="os b-radius15 upping cursor-p noshadow bg-seccolorstyle">
                            <Link to="#">
                                <img className="svg" src="../../style/apps/windows.svg" alt="Centos" />
                                <p className="mb-0 seccolor">Windows</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** TRANSLATION ****** --> */}
            <section id="drop-lng" className="btn-group btn-group-toggle toplang">
                <label data-lng="en-US" htmlFor="option1" className="btn btn-secondary me-2">
                    <input type="radio" name="options" id="option1" defaultValue={true} /> EN
                </label>
                <label data-lng="pt-PT" htmlFor="option2" className="btn btn-secondary">
                    <input defaultValue={false} type="radio" name="options" id="option2" /> PT
                </label>
            </section>
        </div >
    );
};

export default Header;