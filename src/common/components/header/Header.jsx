import styles from '../../styles/Header.module.css';
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from '../../../utils/routes';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../../store/user/userSlice";
import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../../../store/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const [mobileSearchForm, setMobileSearchForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { currentUser, cart } = useSelector(({user}) => user);

  const [values, setValues] = useState({
    name: 'Guest',
    avatar: avatar
  });

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add(styles.sticky);
      } else {
        headerRef.current.classList.remove(styles.sticky);
      }
    });
  };

  const { data, isLoading } = useGetProductsQuery({title: searchValue});

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  

  const clickHandler = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE)
  }

  const searchHandler = ({ target: { value } }) => {
    setSearchValue(value);
  }

  return (
    <div className={styles.header} ref={headerRef}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt='stuff'/>
        </Link>
      </div>
      <div className={styles.info}>

        <div className={styles.user} onClick={clickHandler}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${values.avatar})`}} />
          <div className={styles.username}>{ values.name }</div>
        </div>

        <div className={styles.account}>
          <form className={`${styles.form} ${mobileSearchForm ? styles.show : ''}`}>
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
                onChange={searchHandler}
                value={searchValue}
              />
            </div>
            {
              searchValue && <div className={styles.box}>
                {isLoading ? 'Loading...' : !data.length ? 'No Results' : (data.map(({title, images, id}) => {
                  return (
                    <Link key={id} onClick={() => setSearchValue('')} to={`/phone-store/products/${id}`} className={styles.item}>
                      <div className={styles.image} style={{ backgroundImage: `url(${images[0]})`}}/>
                      <div className={styles.title}>{title}</div>
                    </Link>
                  )
                })) }
              </div>
            }
          </form>
          <div className={styles['search-mobile']} onClick={() => setMobileSearchForm(!mobileSearchForm)}>
            <svg className={styles['header-icon']}>
              <use xlinkHref={`${sprite}#search`} />
            </svg>
          </div>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['header-icon']}>
              <use xlinkHref={`${sprite}#bag`} />
            </svg>
            <span className={styles.count}>{ cart.length ? cart.length : '0'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
