import React, { useCallback, useEffect } from "react";
import Cards from "../../components/card/Card";
import { getProducts } from "../../services/productServices";
import { useAppContext } from "../../context/AppContext";
import { Box } from "@mui/material";
import FilterButtons from "../../components/filterButtons/FilterButtons";

const Products = () => {
  const { products } = useAppContext();

  const getCategories = (products) => {
    const allCategories = products.map((item) => item.category);
    const categories = new Set(allCategories);
    return [...categories];
  };

  const fetchProducts = useCallback(() => {
    getProducts().then((response) => {
      const categories = getCategories(response);
      products.productsDispatch({
        type: "FILLPRODUCT",
        payload: response,
      });
      products.productsDispatch({
        type: "FILLCATEGORIES",
        payload: categories,
      });
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <FilterButtons categories={products.products.categories} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {products.products.products.map((item) => (
          <Cards key={item.id} product={item} />
        ))}
      </Box>
    </>
  );
};

export default Products;
