import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../../store/api/apiSlice";

import styles from '../../../common/styles/Category.module.css';
import Products from "../../Home/components/products/Products";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const { id } = useParams();
  const { list } = useSelector(({categories}) => categories);

  const defaultValues = useMemo(() => ({
    title: '',
    price_min: 0,
    price_max: 0,
  }), []);

  const defaultParams = useMemo(() => ({
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  }), [id, defaultValues]);

  const [isEnd, setIsEnd] = useState(false);
  const [category, setCategory] = useState('defaultParams');
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  const { data, isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setIsEnd(false);
    setParams({
      ...defaultParams,
      categoryId: id
    });
  }, [id, defaultParams, defaultValues]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setIsEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const { name } = list.find((item) => item.id === id * 1);

    setCategory(name);
  }, [id, list]);

  const changeHandler = ({target: { value, name }}) => {
    setValues({...values, [name]: value})
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setItems([]);
    setIsEnd(false);
    setParams({...params, ...values});
  }

  const resetHandler = () => {
    setValues(defaultValues);
    setParams(defaultParams)
    setIsEnd(false);
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{ category }</h2>

      <form onSubmit={submitHandler} className={styles.filters}>
        <div className={styles.filter}>
          <input
            type='text'
            name='title'
            placeholder='Product Name'
            onChange={changeHandler}
            value={values.title}
          />
        </div>
        <div className={styles.filter}>
          <input
            type='number'
            name='price_min'
            placeholder='0'
            onChange={changeHandler}
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={styles.filter}>
          <input
            type='number'
            name='price_max'
            placeholder='0'
            onChange={changeHandler}
            value={values.price_max}
          />
          <span>Price to</span>
        </div>
        <button type="submit" hidden/>
      </form>
      {isLoading
        ? (<div className='preloader'>Loading...</div>)
        : !isSuccess || !items.length ? (
          <div className={styles.back}>
            <span>No results</span>
            <button onClick={resetHandler}>Reset</button>
          </div>
        ) : (
          <Products
            title=''
            products={items}
            style={{padding: 0}}
            amount={items.length}
          />
        )
      }

      {!isEnd && <div className={styles.more}>
        <button onClick={() => setParams({...params, offset: params.offset + params.limit})}>See more</button>
      </div>}
    </section>
  );
};

export default CategoryList;
