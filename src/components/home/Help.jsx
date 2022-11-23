import React from 'react';
import { Link } from 'react-router-dom';

const Help = ({ cards }) => {
    return (
        <section className="services help pt-4 pb-80 bg-colorstyle">
            <div className="container">
                <div className="service-wrap">
                    <div className="row">
                        {cards?.map((card, index) => (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                                <div className="help-container bg-seccolorstyle noshadow">
                                    <Link to={card.url} className="help-item">
                                        <div className="img">
                                            <img className="svg ico" src={card.img} height="65" alt="" />
                                        </div>
                                        <div className="inform">
                                            <div className="title mergecolor">{card.title}</div>
                                            <div className="description seccolor">{card.details}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;