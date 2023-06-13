import styles from '../../styles/User.module.css';
import sprite from "../../assets/images/sprite.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/user/userSlice";

const UserSignupForm = ({closeForm, toggleCurrentFormType}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const handleChange = ({target: {value, name}}) => {
    setValues({...values, [name]: value});
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every(val => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </div>

      <div className={styles.title}>
        Sign Up
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.group}>
          <input
            type="email"
            name='email'
            placeholder='Your email'
            value={values.email}
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name='name'
            placeholder='Your name'
            value={values.name}
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name='password'
            placeholder='Your password'
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name='avatar'
            placeholder='Your avatar(url)'
            value={values.avatar}
            autoComplete='off'
            onChange={handleChange}
          />
        </div>

        <div className={styles.link} onClick={() => toggleCurrentFormType('login')}>
          I already have an account
        </div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
