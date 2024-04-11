import React, { useEffect } from "react";
import Cards from "../../components/card/Card";
import { getProducts } from "../../services/productServices";
import { useAppContext } from "../../context/AppContext";

const Products = () => {
  const { products } = useAppContext();
  console.log(products);

  useEffect(() => {
    getProducts().then((response) => {
      products.productsDispatch({
        type: "FILLPRODUCT",
        payload: response,
      });
    });
  }, []);
  return (
    <div>
      {products.products.products.map((item) => (
        <Cards key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
