import styles from '../../../../common/styles/Home.module.css';
import image from '../../../../common/assets/images/banner.png';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={styles.more}>See More</button>
      </div>

      <div className={styles.right} style={{backgroundImage: `url(${image})`}}>
        <p className={styles.discount}>
          save up to <span>50%</span> of
        </p>
      </div>

    </section>
  );
};

export default Banner;
