import styles from '../../../common/styles/Cart.module.css';
import sprite from "../../../common/assets/images/sprite.svg";
import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../../store/user/userSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { title, category, images, price, quantity } = item;

  const changeQuantityHandler = (action) => {
    switch (action) {
      case 'minus':
        dispatch(addProductToCart({...item, quantity: Math.max(1, quantity - 1)}));
        break;
      case 'plus':
        dispatch(addProductToCart({...item, quantity: Math.max(1, quantity + 1)}));
        break;
      default:
        break;
    }
  }

  const removeProduct = () => {
    dispatch(removeProductFromCart(item.id));
  }

  return (
    <div className={styles.item}>
      <div className={styles.image} style={{ backgroundImage: `url(${images[0]})`}}/>

      <div className={styles.info}>
        <h3 className={styles.name}>{title}</h3>
        <div className={styles.category}>{category.name}</div>
      </div>

      <div className={styles.price}>{price}$</div>
      <div className={styles.quantity}>
        <div className={styles.minus} onClick={() => changeQuantityHandler('minus')}>
          <svg className='icon'>
            <use xlinkHref={`${sprite}#minus`} />
          </svg>
        </div>
        <span>{quantity}</span>
        <div className={styles.plus} onClick={() => changeQuantityHandler('plus')}>
          <svg className='icon'>
            <use xlinkHref={`${sprite}#plus`} />
          </svg>
        </div>
      </div>
      <div className={styles.total}>{price * quantity}$</div>

      <div className={styles.close} onClick={removeProduct}>
        <svg className='icon'>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
