import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, support_sub_list } from '../../data/headerData';
import DesktopSubMenu from './DesktopSubMenu';

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
                                    {navItems?.map((navItem, index) => (
                                        <li key={index} className="menu-item menu-item-has-children me-3">
                                            <NavLink className="m-0 pe-1 v-stroke" to={navItem.link} data-i18n="[html]header.home">{navItem.name}</NavLink>
                                            <div className={`badge ${navItem.badge_color} me-4 wow animated shake delay-1s visible`}>{navItem.badge}</div>
                                            <DesktopSubMenu subNavItem={navItem} />
                                        </li>
                                    ))}
                                    <div className="tech-box">
                                        <img
                                            className="svg"
                                            src="./img/menu.svg"
                                            alt=""
                                        // data-bs-toggle="offcanvas"
                                        // data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
                                        />
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