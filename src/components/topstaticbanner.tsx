import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/css/TopStaticBanner.module.css'; // Import your CSS module

const TopStaticBanner: React.FC = () => {
  return (
    <section>
        <div className={`${styles.banner} banner`}>
            <div className={styles['navi-title']}>
                <h1>Navishkar - Kids Toy Store
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                <a href="">Live Demo</a>
            </div>

        </div>
    </section>

  );
};

export default TopStaticBanner;
