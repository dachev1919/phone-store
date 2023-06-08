import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../store/api/apiSlice";
import { ROUTES } from "../../../utils/routes";
import ProductInfo from "../components/product-info/ProductInfo";
import Products from "../../Home/components/products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../../store/products/productSlice";


const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list,  related } = useSelector(({products}) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);

  useEffect(() => {
    if (!data || !list.length) return;

    if (data) {
      dispatch(getRelatedProducts(data.category.id));
    }
  }, [data, list.length]);

  if (isLoading) {
    return (
      <>
        <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',flex: '1'}}>Data is loading...</h1>
      </>
    )
  }

  return (
    <>
      {data && <ProductInfo { ...data } />}
      <Products products={related} amount={5} title='Related Products' />
    </>
  );
};

export default Product;
