import React, { useCallback, useEffect, useState } from "react";
import Cards from "../../components/card/Card";
import { getProducts } from "../../services/productServices";
import { useAppContext } from "../../context/AppContext";
import { Box } from "@mui/material";
import { generarColoresAleatorios } from "../../utils/colorGenerator";
import FiltersButtons from "../../components/fiiterButtons/FiltersButtons";

const Products = () => {
  const { products } = useAppContext();
  const [categoriesWithColor, setCategoriesWithColor] = useState([]);

  const getCategories = (products) => {
    const allCategories = products.map((item) => item.category);
    const categories = new Set(allCategories);
    return [...categories];
  };

  // const categoriesWithColor = useMemo(() => {
  //   return generarColoresAleatorios(products.products.categories)
  // },[products])

  const fetchProducts = useCallback(() => {
    getProducts().then((response) => {
      const categoriesList = getCategories(response);
      setCategoriesWithColor(generarColoresAleatorios(categoriesList));
      products.productsDispatch({
        type: "FILLPRODUCT",
        payload: response,
      });
      products.productsDispatch({
        type: "FILLCATEGORIES",
        payload: categoriesList,
      });
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <FiltersButtons categories={categoriesWithColor} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        {products.products.products.map((item) => (
          <Cards
            key={item.id}
            product={item}
            colorFont={
              categoriesWithColor.length
                ? categoriesWithColor.find(
                    (element) => item.category === element.category
                  ).colorFont
                : ""
            }
            colorCategory={
              categoriesWithColor.find(
                (element) => item.category === element.category
              ).color
            }
          />
        ))}
      </Box>
    </>
  );
};

export default Products;
