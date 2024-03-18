import BannerSlider from '../../components/BannerSlider';
import SecondBlock from '../../components/SecondBlock';
import HotGoods from '../../components/HotGoods';
import Header from '../../layout/Header';
import SubscriptionBlock from '../../components/SubscriptionBlock';
import Feedback from '../../components/Feedback';
import Footer from '../../layout/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <SecondBlock />
        <HotGoods />
        <SubscriptionBlock />
        <Feedback />
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
