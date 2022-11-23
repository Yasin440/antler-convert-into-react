import React from 'react';
import { locationCards } from '../../data/contactPageData';
import { Link } from 'react-router-dom';

const OurLocation = () => {
    return (
        <section className="services pt-4 sec-normal bg-seccolorstyle">
            <div className="container">
                <div className="randomline">
                    <div className="bigline"></div>
                    <div className="smallline"></div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {locationCards?.map((card, index) => (
                            <div key={index} className="col-sm-12 col-md-4">
                                <div className="service-section bg-colorstyle noshadow">
                                    <div className="plans badge feat bg-pink">{card.badge}</div>
                                    <img className="svg animal" src={card.img} alt="" />
                                    <div className="title mergecolor">{card.place}</div>
                                    <div className="subtitle seccolor">{card.address}</div>
                                    <Link className="btn btn-default-yellow-fill popup-gmaps"
                                        to={card.locationUrl}>Google Maps</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLocation;