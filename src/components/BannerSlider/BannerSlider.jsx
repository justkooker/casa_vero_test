import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderButton from '../SliderButton';
import bannerImage1 from '../../assets/image/slider-image-min.png';
import bannerImage2 from '../../assets/image/slider-image-min.png';

import styles from './BannerSlider.module.scss';
import scssVars from '../../styles/vars.scss';
function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { link: bannerImage1, id: '1' },
    { link: bannerImage2, id: '2' }
  ];
  const sliderRef = useRef(null);

  const commonStyles = {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)'
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: index => setCurrentSlide(index),
    customPaging: i => (
      <span
        style={{
          display: 'block',
          cursor: 'pointer',
          width: '25px',
          height: '4px',
          marginTop: '17px',
          borderRadius: '6px',
          background: i === currentSlide ? scssVars.white : scssVars.black80
        }}
        onClick={() => sliderRef.current.slickGoTo(i)} // переход к слайду по клику
      />
    ),
    appendDots: dots => (
      <ul
        className={styles.customDotsContainer}
        style={{
          position: 'absolute',
          bottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {dots}
      </ul>
    ),
    nextArrow: (
      <SliderButton
        onClick={() => sliderRef.current.slickNext()}
        side='right'
        customStyles={{
          ...commonStyles,
          right: '3.73%'
        }}
      />
    ),
    prevArrow: (
      <SliderButton
        onClick={() => sliderRef.current.slickPrev()}
        customStyles={{
          ...commonStyles,
          left: '3.73%'
        }}
      />
    )
  };

  return (
    <article className={styles.slider}>
      <Slider {...settings} ref={sliderRef}>
        {images.map(image => {
          return (
            <div key={image.id} className={styles.slider__img}>
              <img src={image.link} alt='banner image' />
            </div>
          );
        })}
      </Slider>
    </article>
  );
}

export default BannerSlider;
