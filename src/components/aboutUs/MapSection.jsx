import React from 'react';

const MapSection = () => {
    return (
        <section className="services maping sec-normal sec-grad-grey-to-grey bottompadding">
            <div className="container">
                <div className="service-wrap">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="section-heading text-white mergecolor">Our Datacenters are Located in 7 Regions</h2>
                            <p className="section-subheading text-muted mergecolor"><span className="golink">Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit sed, do eiusmod tempor  <span className="c-pink">incididunt lorem ipsum</span> dolor sit amet</p>
                        </div>
                        <div className="col-md-12 pt-5 scrollme position-relative">
                            <img src="./img/patterns/map.svg" className="lazyload w-10 animateme" alt="Load Balancing" data-when="view" data-from="1" data-to="0" data-opacity="0" />
                            <span className="datacenters montreal" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="Montreal" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                            <span className="datacenters newyork" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="New York" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." ></span>
                            <span className="datacenters portugal" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="Portugal" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                            <span className="datacenters london" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="London" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                            <span className="datacenters moskow" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="Moskow" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                            <span className="datacenters hongkong" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="Hong Kong" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                            <span className="datacenters singapure" data-bs-toggle="popover" data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top" title="Singapure" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;