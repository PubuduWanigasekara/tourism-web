import React from "react";
import ImageBar3 from '../../images/ImageBar3.jpg'

function ImageBar() {
    return(
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src={ImageBar3} alt="ImageBar3" />
                    </div>

                    <div className="item">
                        <img src={ImageBar3} alt="ImageBar3" />
                    </div>

                    <div className="item">
                        <img src={ImageBar3} alt="ImageBar3" />
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default ImageBar;