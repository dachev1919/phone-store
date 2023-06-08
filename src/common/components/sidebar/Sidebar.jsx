import styles from '../../styles/Sidebar.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({categories}) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.slice(0, 9).map(({id, name}) => (
            <li key={id}>
              <NavLink className={({ isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} to={`/phone-store/categories/${id}`}>
                { name }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={styles.footer}>
        <a href='/phone-store/help' className={styles.link}>Help</a>
        <a href='/phone-store/terms' className={styles.link} style={{textDecoration: 'underline'}}>Terms & Conditions</a>
      </div>
    </section>
  );
};

export default Sidebar;
