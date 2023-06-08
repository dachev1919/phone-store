import styles from '../../../../common/styles/Products.module.css';
import { Link } from "react-router-dom";

const Products = ({ title, style = {}, products = [], amount}) => {
  const list = products.filter((_, i) => i < amount);

  const truncateTitle = (title) => {
    if (title.length > 15) {
      return title.slice(0, 15) + '...';
    } else {
      return title;
    }
  };

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map(({id, images, title, category: {name: category}, price}) => (
          <Link to={`/phone-store/products/${id}`} className={styles.product} key={id}>
            <div className={styles.image} style={{backgroundImage: `url(${images[0]})`}}/>

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{truncateTitle(title)}</h3>

              <div className={styles.cat}>{category}</div>

              <div className={styles.info}>
                <div className={styles.price}>{price} $</div>
                <div className={styles.oldPrice}>
                  {Math.floor(price * 1.2)} $
                </div>
              </div>

              <div className={styles.purchases}>
                {Math.floor(Math.random() * 20 + 1)} purchased
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
