import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from '../styles/css/BestSellers.module.css';

const BestSellersSection: React.FC = () => {
    return (
        <section className={`${styles.shop_section}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${styles.shop_by_title} text-center`}>
                            <h2>BEST <span>SELLERS</span></h2>
                            <p>Crowd-pleasers for every age</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Array(4).fill(null).map((_, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <div className={styles.play_role_title}>
                                <div className={styles.play_kit_title}>
                                    <Image
                                        src="/img/gadi-removebg-preview.png" // Make sure the image exists in the public folder
                                        alt="gadi"
                                        width={300}
                                        height={200}
                                        className="img-fluid" // Bootstrap class for responsive images
                                    />
                                </div>
                                <div className={styles.playkit_action}>
                                    <div className={styles.kit_down}>
                                        <p>Play and Learn Kit | 3-6 years | DIY Activity Kit</p>
                                    </div>
                                    <div className={styles.buttton}>
                                        <a href="#" className={`${styles.ex_btn} ms-2`}>-13%</a>
                                        <a href="#" className={`${styles.ex_btn1} ms-2`}>₹699</a>
                                        <a href="#" className={`${styles.ex_btn2} ms-2`}>₹799</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellersSection;
