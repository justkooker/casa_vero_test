import classNames from 'classnames';

import Menu from '../../components/Menu';

import styles from './Footer.module.scss';
import scssVars from '../../styles/vars.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.container)}>
        <ul className={styles.list}>
          <li className={styles.list__item}>Контакт - центр</li>
          <li className={styles.list__item}>098 900 09 09 </li>
          <li className={styles.list__item}>Пн - Пт 09:00 - 21:00</li>
          <li className={styles.list__item}>Пн - Пт 09:00 - 21:00</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.list__item}>Покупцям</li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Оплата і доставка
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Повернення
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Питання та відповіді
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.list__item}> Особистий кабінет</li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Мої дані
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Історія замовлень
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Улюблені
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Розсилки
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.list__item}>Про компанію</li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Про нас
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Новини
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Стати партнером
            </a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href='#'>
              Угода користувача
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={classNames('container',styles.footer__container)}>
          <div className={styles.footer__menu}>
            <Menu textColor={scssVars.white} />
          </div>
          <p className={styles.footer__license}>
            © 2022 — 2023 IGNAT. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
