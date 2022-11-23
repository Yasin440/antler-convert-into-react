import React from 'react';
import { feature } from '../../data/homePageData';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <>
            {/* curve img svg */}
            <svg className="division-ontop bg-white d-none" viewBox="0 0 1440 150">
                <path fill="#fdd700" fillOpacity="1" d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                </path>
            </svg>

            {/* <!-- ***** FEATURES ***** --> */}
            <section className="services sec-normal sec-bg4 exapath">
                <div className="container">
                    <div className="service-wrap">
                        <div className="row">
                            {feature?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-sm-12 text-center">
                                        <h2 className="section-heading">{item.title}</h2>
                                        <p className="section-subheading">{item.details}</p>
                                    </div>
                                    {item.cards?.map((card, index2) => (
                                        <div key={index2} className="col-sm-12 col-md-4 wow animated fadeInUp fast">
                                            <div className="service-section bg-colorstyle noshadow">
                                                {card.badge !== null && < div className="plans badge feat bg-pink">{card.badge}</div>}
                                                <img className="svg" src={card.img} alt="" />
                                                <div className="title mergecolor">{card.title}</div>
                                                <p className="subtitle seccolor">{card.details}</p>
                                                <Link to={card.readMoreUrl} className="btn btn-default-yellow-fill">Read more</Link>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;