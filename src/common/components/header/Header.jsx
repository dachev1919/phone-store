import styles from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import sprite from '../../assets/images/sprite.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt='stuff'/>
        </Link>
      </div>
      <div className={styles.info}>

        <div className={styles.user}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})`}} />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref={`${sprite}#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name='search'
              placeholder='Search for anything...'
              autoComplete='off'
              onChange={() => {}}
            />
          </div>
          {/*<div className={styles.box}></div>*/}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref={`${sprite}#bag`} />
            </svg>
            <span className={styles.count}>1</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
