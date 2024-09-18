import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import styles from '../styles/css/ToyStore.module.css'; // Assuming you have this CSS module

const ToyStoreSection: React.FC = () => {
  return (
    <section className={styles.nami_toys_toys_store}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-toys d-flex justify-content-between align-items-center flex-wrap">
              {/* Text Section */}
              <div className={`${styles.toys_text} col-lg-6 col-md-12 justify-content-between`}>
                <h4>Navishkar - Kids Toy Store</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
                  eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut
                  enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris
                  nisi ut aliquip <br /> ex ea commodo consequat.
                </p>
                <a href="#">
                  Shop More 
                </a>
              </div>

              {/* First Image */}
              <div className="col-lg-3 col-md-6 text-center">
                <Image
                  src="/img/group.png" // Leading slash for Next.js static asset
                  alt="Group 77"
                  width={300} // Adjust width
                  height={300} // Adjust height
                  className={styles.img_toys_titles}
                />
              </div>

              {/* Second Image */}
              <div className="col-lg-3 col-md-6 text-center">
                <Image
                  src="/img/childimf.png"
                  alt="Cheerful Kids"
                  width={300} // Adjust width
                  height={300} // Adjust height
                  className={styles.img_toys_title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyStoreSection;
