import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../styles/css/Achievements.module.css'; // Custom CSS module

const Achievements: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="achievement-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="achievement-title text-center">
              <h2>OUR <span>ACHIEVEMENTS</span></h2>
            </div>
          </div>
        </div>

        <Carousel responsive={responsive}
        //  swipeable={false}
        //  draggable={false}
        //  showDots={true}
        //  ssr={true} // means to render carousel on server-side.
        //  infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
        //  keyBoardControl={true}
        //  customTransition="all .5"
        //  transitionDuration={500}
        //  containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  dotListClass="custom-dot-list-style"
        //  itemClass="carousel-item-padding-40-px"
        >
        <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>
            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>
            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>
            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>

            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>

            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>

            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>

            <div>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>


          
        </Carousel>
        {/* <div className={`d-flex justify-content-center ${styles.slideContainer}`}>
          <Carousel responsive={responsive} showDots={true} infinite={true}>
            <div className={styles.slideImage}>
              <Image src="/img/08a4.png" alt="Achievement 1" width={200} height={200} />
            </div>
            <div className={styles.slideImage}>
              <Image src="/img/achievement2.png" alt="Achievement 2" width={200} height={200} />
            </div>
            <div className={styles.slideImage}>
              <Image src="/img/achievement3.png" alt="Achievement 3" width={200} height={200} />
            </div>
            <div className={styles.slideImage}>
              <Image src="/img/achievement4.png" alt="Achievement 4" width={200} height={200} />
            </div>
          </Carousel>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;
