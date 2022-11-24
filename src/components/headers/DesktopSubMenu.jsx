import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopSubMenu = ({ subNavItem }) => {
    const { subNavDesignID, subNav, offer, contact } = subNavItem;
    console.log(subNavItem);
    const DesignOne = ({ subNav }) => {
        return (
            <ul className="sub-menu dropdown bg-colorstyle">
                {subNav?.map((item, index) => (
                    <li key={index} className="menu-item"><NavLink className="mergecolor" to={item.link} data-i18n="[html]submenu.home3d">{item.name}</NavLink>
                        <div className={`menu badge feat ${item.badge_color}`}>{item.badge}</div>
                    </li>
                ))}
            </ul>
        )
    }
    const DesignTwo = ({ subNav }) => {
        return (
            <div className="sub-menu menu-large bg-colorstyle">
                <div className="service-list">
                    {subNav?.map((item, index) => (
                        <div key={index} className="service">
                            <img className="svg" src={item.img} alt={item.name} />
                            <div className="media-body">
                                <NavLink className="menu-item mergecolor" to={item.link} data-i18n="[html]submenu.dedicated">{item.name}</NavLink>
                                <div className={`menu badge feat ${item.badge_color}`}>{item.badge}</div>
                                <p className="seccolor">{item.subName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    const DesignThree = ({ subNav, offer }) => {
        return (
            <div className="sub-menu megamenu-list">
                <div className="container">
                    <div className="row">
                        <div className="service-list col-md-9 bg-colorstyle">
                            <div className="row">
                                {subNav?.map((item, index) => (
                                    <div key={index} className="col-4 service">
                                        <div className="media-body">
                                            <div className="top-head">
                                                <img className="svg" src={item.img} alt={item.name} />
                                                <div className="menu-item c-grey mergecolor" data-i18n="[html]submenu.services">{item.name}</div>
                                            </div>
                                            <hr />
                                            <ul>
                                                {item.lists?.map((list, index2) => (
                                                    <li key={index2} className="menu-item"><NavLink className="mergecolor" to={list.link}
                                                        data-i18n="[html]submenu.gaming">{list.name}</NavLink>
                                                        <div className={`badge inside ms-1 ${list.badge_color}`}>{list.badge}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {offer &&
                            <div className="start-offer col-md-3">
                                <div className="inner">
                                    <h4 className="title my-3">{offer.title}</h4>
                                    <div className="inner-content mb-4">{offer.details}</div>
                                    <span className="m-0">Before <del className="c-pink">{offer.currency} {offer.beforePrice} {offer.timeUnit}</del></span><br />
                                    <h4 className="m-0"><b>Now</b> <b className="c-pink">{offer.currency} {offer.nowPrice} {offer.timeUnit}</b></h4>
                                    <NavLink to={offer.link} className="btn btn-default-pink-fill mt-4">See Plans</NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    const DesignFour = ({ subNav, contact }) => {
        return (
            <div className="sub-menu megamenu">
                <div className="container">
                    <div className="row">
                        <div className="service-list col-md-9 bg-colorstyle">
                            <div className="row">
                                {subNav.map((item, index) => {
                                    return (
                                        <div key={index} className="col-4 service">
                                            <div className="media-left">
                                                <img className="svg" src={item.img} alt="Knowledgebase" />
                                            </div>
                                            <div className="media-body">
                                                <NavLink className="menu-item mergecolor" to={item.link}
                                                    data-i18n="[html]submenu.knowlist">{item.name}</NavLink>
                                                <div className={`badge inside ${item.batch_color} ms-1`}>{item.batch}</div>
                                                <p className="seccolor">{item.details}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {contact &&
                            <div className="start-offer col-md-3">
                                <div className="inner">
                                    <h4 className="title my-3">{contact.title}</h4>
                                    <div className="inner-content"><span>Call us:</span> <b>{contact.phone}</b>{contact.address}</div>
                                    <NavLink to={contact.link} className="btn btn-default-yellow-fill mt-4">Contact Us</NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            {subNavDesignID === 1 && <DesignOne subNav={subNav} />}
            {subNavDesignID === 2 && <DesignTwo subNav={subNav} />}
            {subNavDesignID === 3 && <DesignThree subNav={subNav} offer={offer} />}
            {subNavDesignID === 4 && <DesignFour subNav={subNav} contact={contact} />}
        </React.Fragment>
    );
};

export default DesktopSubMenu;