import styles from './Menu.module.scss';


function Menu({textColor}) {
  const menuItems = ['новинки', 'чоловіки', 'жінки', 'аксесуари', 'акції'];

  return (
    <ul className={styles.menu}>
      {menuItems.map(item => (
        <li key={item} className={styles.menu__item} style={{'color':textColor}}>
          <a className={styles.menu__link} href='#'>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
