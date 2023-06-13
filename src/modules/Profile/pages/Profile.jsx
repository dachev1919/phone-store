import styles from '../../../common/styles/Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../../store/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({user}) => user);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);


  const handleChange = ({target: {value, name}}) => {
    setValues({...values, [name]: value});
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every(val => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  }

  return (
    <section className={styles.profile}>
      {!currentUser ? <span>You need to log in</span> : (
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
          <button type="submit" className={styles.submit}>
            Update account
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
