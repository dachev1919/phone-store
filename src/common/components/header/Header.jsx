import styles from '../../styles/Header.module.css';
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from '../../../utils/routes';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../../store/user/userSlice";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../store/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const { currentUser } = useSelector(({user}) => user);

  const [values, setValues] = useState({
    name: 'Guest',
    avatar: avatar
  });

  const { data, isLoading } = useGetProductsQuery({title: searchValue});

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);
  

  const clickHandler = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE)
  }

  const searchHandler = ({ target: { value } }) => {
    setSearchValue(value);
  }

  return (
    <div className={styles.header}>
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
