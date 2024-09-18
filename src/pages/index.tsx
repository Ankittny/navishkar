import Head from 'next/head';
import styles from '../styles/css/Style.module.css';
import Header from '../components/Header';
import TopStaticBanner from '../components/topstaticbanner';
import BestSellersSection from '../components/BestSellersSection';
import ToyStoreSection from '../components/ToyStoreSection';
import Shopbyinterst from '../components/Shopbyinterst';
import AchieveMents from '../components/Achievements';
import Footer from '../components/footer';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header /> {/* Add the Header component here */}
      <TopStaticBanner />
      <BestSellersSection />
      <ToyStoreSection />
      <Shopbyinterst />
      <AchieveMents />
      <Footer/>
    </div>
  );
}

export default Home;
