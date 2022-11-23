import React from 'react';

const LoadBalance = () => {
    return (
        <>
            <section className="balancing sec-normal pb-80 bg-colorstyle">
                <div className="h-services">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-heading mergecolor">Cloud Load Balancing</h2>
                                <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div className="col-md-12">
                                <div className="wrap-service load">
                                    <div className="wow animated fadeInUp fast">
                                        <img className="svg mt-50 w-100 ltr-img d-block" src="./img/patterns/balancing.svg" alt="Load Balancing" />
                                        <img className="svg mt-50 w-100 rtl-img d-none" src="./img/patterns/balancing-rtl.svg" alt="Load Balancing" />
                                    </div>
                                    <div className="row text-info text-center">
                                        <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[1] Users</b> <br />
                                            <span className="info seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
                                        </div>
                                        <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[2] Load Balancing</b> <br />
                                            <span className="info seccolor">Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae omnis iste</span>
                                        </div>
                                        <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[3] Cloud Servers</b> <br />
                                            <span className="info seccolor">Omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoadBalance;