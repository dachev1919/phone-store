import Poster from "../components/poster/Poster";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";
import Banner from "../components/banner/Banner";
import { useEffect } from "react";
import { filterByPrice } from "../../../store/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list: productsList, filtered },
    categories: { list: categoriesList }
  } = useSelector((state) => state);

  useEffect(() => {
    if (!productsList.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, productsList.length]);

  return (
    <>
      <Poster />
      <Products products={ productsList } amount={5} title='Trending' />
      <Banner />
      <Categories categories={ categoriesList } amount={5} title='Worth seeing'/>
      <Products products={ filtered } amount={5} title='Less than 100%' />
    </>
  );
};

export default Home;
