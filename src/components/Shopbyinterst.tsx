import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/css/ToyShopinterst.module.css';

const Shopbyinterst = () => {
  return (
    <section>
      <div className="toys-kids-title" id="toys-kids-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.shop_by_title} text-center mb-4`}>
                <h2>SHOP BY <span>INTEREST</span></h2>
                <p>A whole lotta fun & learning</p>
              </div>

              {/* List of Interest Categories */}
            
              <div  className={`${styles.list_items} mb-4`}>
                <ul className={`${styles.list_inline} d-flex justify-content-center gap-5`}>
                  <li className="active"><a href="#">Activity Kits</a></li>
                  <li><a href="#">Mechanical Toys</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Technology Toys</a></li>
                  <li><a href="#">Science Toys</a></li>
                  <li><a href="#">Engineering Toys</a></li>
                </ul>
              </div>

              {/* First Row of Product Cards */}
              <div className="row top-bar">
                {[11911, 11912, 11914, 'Container'].map((img, idx) => (
                  <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                    <div className={`${styles.play_role_title} ${styles.title_access}`} title="Access">
                      <div className="play-kit-title play-cubric">
                        <Image
                          src="/img/11911.png"
                          alt={`${img}`}
                          width={300}
                          height={300}
                          className="img-fluid"
                        />
                      </div>
                      <div className="playkit-action action-inject mt-3">
                        <div className={styles.kit_down}>
                          <p>Play and Learn Kit | 3-6 years | DIY Activity Kit</p>
                        </div>
                        <div className={styles.buttton}>
                            <a href="#" className={`${styles.ex_btn} ms-2`}>-13%</a>
                            <a href="#" className={`${styles.ex_btn1} ms-2`}>₹699</a>
                            <a href="#" className={`${styles.ex_btn2} ms-2`}>₹799</a>
                        </div>
                      </div>
                      <div className="add-btn text-center mt-3">
                        <button className="btn btn-primary">
                          <i className="ri-shopping-cart-fill mx-2"></i>ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopbyinterst;
