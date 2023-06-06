import styles from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import logo from '../../assets/images/logo.svg';
import sprite from "../../assets/images/sprite.svg";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt='stuff'/>
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a target='_blank' rel="noreferrer" href="https://github.com/dachev1919">Dachev</a>
      </div>
      <div className={styles.socials}>
        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/dachev0leg/">
          <svg className='icon'>
            <use xlinkHref={`${sprite}#instagram`} />
          </svg>
        </a>

        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100006843678031">
          <svg className='icon'>
            <use xlinkHref={`${sprite}#facebook`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
