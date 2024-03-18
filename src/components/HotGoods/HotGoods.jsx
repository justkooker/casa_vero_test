import classNames from 'classnames';
import { SwiperSlide } from 'swiper/react';

import IconSprite from '../IconSprite';
import SliderTemplate from '../SliderTemplate';
import Button from '../Button';

import styles from './HotGoods.module.scss';
import scssVars from '../../styles/vars.scss';

import sprite from '../../assets/svg/iconSprite.svg';
import { goods } from '../../data';

function HotGoods() {
  return (
    <article className={classNames('container', styles.hotGoods)}>
      <SliderTemplate
        id='hot-goods'
        title='Найгарячіші товари'
        slidesPerGroup={3}
        slidesPerView={3}
        spaceBetween={50}
      >
        {goods.map(item => {
          return (
        
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <div className={styles.card__img}>
                    <img src={item.image} alt='Goods image' />
                  </div>
                  <div>
                    <Button
                      paddingTB={10}
                      paddingLR={9}
                      borderRadius='50%'
                      bgColor={scssVars.white}
                      hoveredBgcolor={scssVars.black10}
                      customStyles={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px'
                      }}
                    >
                      <IconSprite
                        sprite={sprite}
                        id='heart'
                        width={16}
                        height={15}
                      />
                    </Button>
                  </div>
                  <h4 className={styles.card__name}>{item.name}</h4>
                  <p className={styles.card__category}>{item.category}</p>
                  <p className={styles.card__option}>{item.option}</p>
                  <p className={styles.card__price}>
                    {item.price}
                    <span className={styles.card__currency}> ГРН.</span>
                  </p>
                </div>
              </SwiperSlide>
           
          );
        })}
      </SliderTemplate>
    </article>
  );
}

export default HotGoods;
