import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../../assets/brands/antonio-cangianiello-A48TeOfOjVQ-unsplash.jpg"
import img2 from "../../../assets/brands/karl-fredrickson-KI29k_O9te0-unsplash.jpg"
import img3 from "../../../assets/brands/matt-bango-QpXtsmrDusk-unsplash.jpg"
import "./BrandCarusel.css"

const BrandCarusel = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-h"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-h"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-h"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>   
    );
};

export default BrandCarusel;