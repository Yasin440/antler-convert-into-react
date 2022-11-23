import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { TypeAnimation } from 'react-type-animation';

const HomeSlider = () => {
    return (
        <Carousel className="homeSlider" style={{ padding: 118 }}>
            <Carousel.Item>
                <div className="slider-content">
                    <div className="container">
                        <img className="svg custom-element-right" src="./img/patterns/cloud3d.svg" alt="Cloud VPS Server" />
                        <div className="col-sm-12 col-md-8 px-0">
                            <h1 className="title">Dedicated With</h1><br/>
                            <TypeAnimation
                                sequence={[
                                    "Premium hardware.",
                                    3000,
                                    "Large performance.",
                                    3000,
                                    "Fully dedicated.",
                                    3000
                                ]}
                                wrapper="h1"
                                cursor={true}
                                repeat={Infinity}
                            />
                            <p className="subheading">Powerful servers with high-end resources that will guarantee resource exclusivity, starting at just
                                <b className="c-pink">$90.22/mo</b>
                            </p>
                            <a href="vps" className="btn btn-default-yellow-fill me-3 mt-3">Get Prices</a>
                            <a href="vps" className="btn btn-default-pink-fill mt-3">Learn more</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slider-content">
                    <div className="container">
                        <img className="svg custom-element-right" src="./img/patterns/cloud3d.svg" alt="Cloud VPS Server" />
                        <div className="col-sm-12 col-md-8 px-0">
                            <h1 className="title">Virtual <br />Cloud Servers</h1>
                            <p >
                                <i className="c-pink feat fas fa-check-circle me-2"></i> Immediate scalability<br />
                                <i className="c-pink feat fas fa-check-circle me-2"></i> High performance<br />
                                <i className="c-pink feat fas fa-check-circle me-2"></i> Fast deployment
                            </p>
                            <a href="vps" className="btn btn-default-yellow-fill me-3 mt-3">Get Prices</a>
                            <a href="vps" className="btn btn-default-pink-fill mt-3">Learn more</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeSlider;