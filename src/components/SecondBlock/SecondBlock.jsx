import classNames from 'classnames';

import Button from '../Button';

import styles from './SecondBlock.module.scss';
import '../../styles/global.scss';
import scssVars from '../../styles/vars.scss';
import image from '../../assets/image/second-image-min.png';

function SecondBlock() {
  return (
    <article className={classNames('container', styles.secondBlock)}>
      <section className={styles.content}>
        <h2 className={styles.content__title}>
          Ми знаємо, що сподобається вашим “великим” друзям!
        </h2>
        <p className={styles.content__text}>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <Button
          bgColor={scssVars.black100}
          hoveredBgcolor={scssVars.black80}
          textColor={scssVars.white}
          borderRadius={15}
          paddingTB={20}
          paddingLR={35}
        >
          <span className={styles.btnText}>До каталогу</span>
        </Button>
      </section>
      <div className={styles.secondBlock__img}>
        <img src={image} alt='Bodybuilder image' />
      </div>
    </article>
  );
}

export default SecondBlock;
