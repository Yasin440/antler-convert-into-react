import React from 'react';
import { packages } from '../../data/homePageData';

const PackingTable = () => {
    return (
        <section className="pricing special sec-up-slider p-0 bg-colorstyle specialposition">
            <div className="container pb-5">
                <div className="row">
                    {packages?.map((pack, index) => (
                        <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                            <div className="wrapper text-start noshadow">
                                <div className="plans badge feat bg-pink">{pack.batch}</div>
                                <div className="top-content bg-seccolorstyle topradius">
                                    <img className="svg mb-3" src={pack.img} alt="" />
                                    <div className="title">{pack.title}</div>
                                    <div className="fromer seccolor">{pack.time}</div>
                                    <div className="price mergecolor"><sup>{pack.currency}</sup>{pack.price} <span className="period">/{pack.timeUnit}</span></div>
                                    <a href="configurator" className="btn btn-default-yellow-fill">{pack.btnContent}</a>
                                </div>
                                <ul className={`list-info ${index % 2 === 1 && 'bg-purple'}`}>
                                    {pack.lists?.map((list, index2) => (
                                        <li key={index2}>
                                            <i className={`${list.icon}`}></i> <span className="c-pink">{list.title}</span><br /> <span>{list.amount}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackingTable;