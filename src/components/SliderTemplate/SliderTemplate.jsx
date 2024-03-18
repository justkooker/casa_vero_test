import classNames from 'classnames';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import IconSprite from '../IconSprite';
import Button from '../Button';


import styles from './SliderTemplate.module.scss';
import './slider.scss';
import sprite from '../../assets/svg/iconSprite.svg';

function SliderTemplate({
  title,
  id,
  slidesPerView = 3,
  slidesPerGroup = 0,
  spaceBetween = 10,
  children
}) {
  return (
    <>
      <div className={styles.slider__container}>
        <div className={styles.flex}>
          <h3 className={styles.slider__title}>{title}</h3>
          <div className={styles.slider__nav}>
            <div
              className={classNames(
                `${id}-swiper-pagination`,
                'swiper-pagination'
              )}
            ></div>
            <div className={styles.slider__btns}>
              <div className={classNames(`${id}-button-prev`, 'button-prev')}>
                <Button>
                  <IconSprite
                    sprite={sprite}
                    id='arrow-straight'
                    width={25}
                    height={7}
                  />
                </Button>
              </div>
              <div className={classNames(`${id}-button-next`, 'button-next')}>
                <Button>
                  <IconSprite
                    sprite={sprite}
                    id='arrow-straight'
                    width={25}
                    height={7}
                    rotateDeg={180}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            type: 'fraction',
            el: `.${id}-swiper-pagination`,
            formatFractionCurrent: function (number) {
              return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
              return ('0' + number).slice(-2);
            }
          }}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          navigation={{
            prevEl: `.${id}-button-prev`,
            nextEl: `.${id}-button-next`
          }}
          loop={true}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
}

export default SliderTemplate;
