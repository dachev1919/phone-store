import { useSelector } from "react-redux";
import styles from '../../../common/styles/Cart.module.css';
import CartItem from "../components/CartItem";
import { sumBy } from "../../../utils/common";

const Cart = () => {
  const {cart} = useSelector(({user}) => user);

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your Cart</h2>

      {!cart.length
       ? (
         <div className={styles.empty}>Here is empty</div>
        )
       : (
         <>
           <div className={styles.list}>
             {cart.map((item) => <CartItem key={item.id} item={item} />)}
           </div>

           <div className={styles.actions}>
             <div className={styles.total}>TOTAL PRICE: <span>{sumBy(cart.map(({quantity, price}) => quantity * price))}</span></div>
           </div>
         </>
        )
      }
    </section>
  );
};

export default Cart;
