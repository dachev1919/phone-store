import styles from '../../../../common/styles/Home.module.css';
import background from '../../../../common/assets/images/computer.png';
import { ROUTES } from "../../../../utils/routes";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2022</div>
          <h1 className={styles.head}>LENNON r2b2 with NVIDIA 5090 TI</h1>
          <Link to='/phone-store/categories/1'><button className={styles.button}>Shop Now</button></Link>
        </div>
        <div className={styles.image}>
          <img src={background} alt="computer"/>
        </div>
      </div>
    </section>
  );
};

export default Poster;
