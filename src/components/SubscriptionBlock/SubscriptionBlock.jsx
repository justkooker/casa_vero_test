import styles from './SubscriptionBlock.module.scss';

function SubscriptionBlock() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  
  return (
    <section className='container'>
      <div className={styles.SubscriptionBlock}>
        <h2 className={styles.SubscriptionBlock__title}>Спіймай всі акції!</h2>
        <p className={styles.SubscriptionBlock__info}>
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з`влятись у нашому магазині. А у нас їх багато :D
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type='text'
            className={styles.form__input}
            placeholder='введіть'
          />
          <button className={styles.form__btn}>Підписатись</button>
        </form>
      </div>
    </section>
  );
}

export default SubscriptionBlock;
