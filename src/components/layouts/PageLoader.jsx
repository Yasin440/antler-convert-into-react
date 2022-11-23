import React from 'react';

const PageLoader = () => {
    return (
        <div id="spinner-area">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
                <div className="spinner-txt">Antler...</div>
            </div>
        </div>
    );
};

export default PageLoader;