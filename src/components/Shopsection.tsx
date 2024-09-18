import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const BestSellersSection: React.FC = () => {
    return (
        <section>
            <div className="shop-section" id="shop-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-by-title text-center">
                                <h2>BEST <span>SELLERS</span></h2>
                                <p>Crowd-pleasers for every age</p>
                            </div>
                        </div>
                        <div className="row">
                            {Array(4).fill(null).map((_, index) => (
                                <div className="col-lg-3" key={index}>
                                    <div className="play-role-title">
                                        <div className="play-kit-title">
                                            <Image
                                                src="/img/gadi-removebg-preview.png"
                                                alt="gadi"
                                                width={300}  // Adjust width
                                                height={200} // Adjust height
                                            />
                                        </div>
                                        <div className="playkit-action">
                                            <div className="kit-down">
                                                <p>Play and Learn Kit | 3-6 years | DIY Activity Kit</p>
                                            </div>
                                            <div className="buttton">
                                                <button><a href="#" className="ex-btn">-13%</a></button>
                                                <button><a href="#" className="ex-btn1">699</a></button>
                                                <button><a href="#" className="ex-btn2">₹799</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestSellersSection;
