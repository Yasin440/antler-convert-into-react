import React from 'react';
import { caseStudySliderData } from '../../data/aboutPageData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';

const CaseStudy = () => {
    return (
        <section className="casestudy sec-bg1 bg-colorstyle">
            <div className="container">
                <div className="sec-main sec-up bg-purple mb-0 nomargin">
                    <img className="lazyload ltr-img d-block" src="./img/casestudy.png" data-src="./img/casestudy.png" alt="Case Study" />
                    <img className="lazyload rtl-img d-none" src="./img/casestudy-rtl.png" data-src="./img/casestudy-rtl.png" alt="Case Study" />
                    <div className="plans badge feat bg-dark">case study</div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-9">
                            <div className="slider-container slider-filter">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar]}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    {caseStudySliderData?.map((slider, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="swiper-slide">
                                                <h3 className="author">{slider.title}</h3>
                                                <div className="content-info">
                                                    <p>{slider.details}</p>
                                                    <div className="mb-3">{slider.owner}</div>
                                                    <a href={slider.casefile} className="btn btn-default-yellow-fill mb-2">Case Study Download</a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;