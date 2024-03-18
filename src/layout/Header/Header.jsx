import classNames from 'classnames';

import Menu from '../../components/Menu/Menu';
import SearchInput from '../../components/SearchInput/SearchInput';
import IconSprite from '../../components/IconSprite/IconSprite';
import Button from '../../components/Button';

import styles from './Header.module.scss';
import scssVars from '../../styles/vars.scss';

import logo from '../../assets/svg/Logo.svg';
import sprite from '../../assets/svg/iconSprite.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.layoutTop}>
        <div className={classNames('container', styles.headerTop)}>
          <span className={classNames(styles.headerTop__hotLineNumber)}>
            098 900 09 09
          </span>
          <a className={styles.headerTop__helpLink} href='#'>
            Допомога
          </a>
          <div className={styles.auth}>
            <a className={styles.auth__btn} href='#'>
              Увійти
            </a>
            <span className={styles.auth__btn}> / </span>
            <a className={styles.auth__btn} href='#'>
              Зареєструватися
            </a>
          </div>
        </div>
      </div>
      <div className={styles.layoutBottom}>
        <div className={classNames('container', styles.headerMain)}>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
          </div>
          <Menu textColor={scssVars.black80}/>
          <div className={styles.searchField}>
            <SearchInput />
            <Button>
              <IconSprite sprite={sprite} id='heart' width={24} height={24} />
            </Button>
            <Button>
              <IconSprite sprite={sprite} id='bag' width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
