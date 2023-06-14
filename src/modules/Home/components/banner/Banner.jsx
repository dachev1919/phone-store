import styles from '../../../../common/styles/Home.module.css';
import image from '../../../../common/assets/images/banner.png';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <Link to='/phone-store/categories/2'><button className={styles.more}>See More</button></Link>
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
