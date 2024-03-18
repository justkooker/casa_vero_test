import IconSprite from '../IconSprite/IconSprite';

import sprite from '../../assets/svg/iconSprite.svg';

import styles from './SearchInput.module.scss';

function SearchInput() {
  return (
    <div className={styles.search}>
      <button className={styles.search__btn}>
        <IconSprite sprite={sprite} id='search' width={21.5} height={21.5} />
      </button>
      <input className={styles.search__input} type='text' />
    </div>
  );
}

export default SearchInput;
