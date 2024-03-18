import { SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import SliderTemplate from '../SliderTemplate';
import IconSprite from '../IconSprite';
import styles from './Feedback.module.scss';
import { usersFeedback } from '../../data';
import sprite from '../../assets/svg/iconSprite.svg';

function Feedback() {
  return (
    <section className={classNames('container',styles.container)}>
      <SliderTemplate
        id='feedback'
        title='Відгуги наших клієнтів'
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={30}
      >
        {usersFeedback.map(user => {
          return (
              <SwiperSlide key={user.id}>
                <div className={styles.feedback}>
                  <div
                    className={classNames(styles.feedback__user, styles.user)}
                  >
                    <div className={styles.user_avatar}>
                      <img
                        src={require(`../../assets/image/${user.avatar}`)}
                        alt='User avatar'
                      />
                    </div>
                    <div className={styles.user__container}>
                      <IconSprite
                        sprite={sprite}
                        width={58}
                        height={12}
                        id={user.stars}
                      />
                      <span className={styles.user__name}>{user.userName}</span>
                    </div>
                  </div>
                  <p className={styles.feedback__text}>{user.feedback}</p>
                </div>
              </SwiperSlide>
          );
        })}
      </SliderTemplate>
    </section>
  );
}

export default Feedback;
