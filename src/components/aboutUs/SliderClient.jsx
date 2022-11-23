import React from 'react';
import { whyUs, clientInfo } from '../../data/aboutPageData';

const SliderClient = () => {
    return (
        <div>
            {/* <!-- ***** SLIDER ***** --> */}
            <div className="top-header item8 overlay">
                <div className="container">
                    <div className="row">
                        {whyUs?.map((item, index) => (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                                <div className="wrapper">
                                    <h1 className="heading">{item.title}</h1>
                                    <div className="included">
                                        <h4 className="mb-3">{item.sub_title}</h4>
                                        {item.lists?.map((list, i) => (
                                            <ul key={i}>
                                                <li><i className={`${list.icon}`}></i>{list.name}</li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- ***** CLIENT STATS ***** --> */}
            <section id="clientstats" className={`pricing special ${whyUs?.length < 2 && clientInfo?.length < 3 ? 'sec-uping' : ''} scrollme bg-colorstyle specialposition`}>
                <div className="container">
                    <div className="row justify-content-end pb-80">
                        {clientInfo?.map((item, i) => (
                            <div key={i} className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="span" data-from="0" data-to="1" data-opacity="1" data-translatey="50">
                                <div className="wrapper price-container text-start bg-seccolorstyle noshadow">
                                    {item.batch !== null &&
                                        <div className={`plans badge feat ${item.batch_color}`}>{item.batch}</div>}
                                    <div className="top-content pb-5">
                                        <img className="svg mb-3" src={item.img} height="65" alt="" />
                                        <div className="title mergecolor">{item.title}</div>
                                        <div className="fromer pt-3 seccolor">{item.details}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SliderClient;