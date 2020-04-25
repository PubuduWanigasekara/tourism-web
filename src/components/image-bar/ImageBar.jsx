import React from "react";
import ImageBar3 from '../../images/ImageBar3.jpg'
import ImageBar4 from '../../images/ImageBar4.jpg'
import ImageBar5 from '../../images/ImageBar5.jpg'

function ImageBar() {
    return(
        <div>
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={ImageBar3} alt="Los Angeles" style={{width: '100%'}} />
                            {/*<div className="carousel-caption">*/}
                            {/*    <h3>Los Angeles</h3>*/}
                            {/*    <p>LA is always so much fun!</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="item">
                            <img src={ImageBar4} alt="Chicago" style={{width: '100%'}} />
                            {/*<div className="carousel-caption">*/}
                            {/*    <h3>Chicago</h3>*/}
                            {/*    <p>Thank you, Chicago!</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="item">
                            <img src={ImageBar5} alt="New York" style={{width: '100%'}} />
                            {/*<div className="carousel-caption">*/}
                            {/*    <h3>New York</h3>*/}
                            {/*    <p>We love the Big Apple!</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ImageBar;