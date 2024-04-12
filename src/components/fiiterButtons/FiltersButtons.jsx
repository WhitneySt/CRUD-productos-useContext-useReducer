import { Box, Button } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/productServices";

const FiltersButtons = ({ categories = [] }) => {
  const {
    products: { productsDispatch },
  } = useAppContext();

  const handleFilter = async (category = "all") => {
    const products =
      category === "all"
        ? await getProducts()
        : await getProductsByCategory(category);
    const activeFilter = category === "all" ? false : true;
    productsDispatch({
      type: "FILTERPRODUCTS",
      payload: {
        products,
        activeFilter,
      },
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: '10px',gap:'5px', flexWrap:'wrap' }}>
      <Button variant="contained" size="small" onClick={() => handleFilter()}>
        All
      </Button>
      {categories.length
        ? categories.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleFilter(item.category)}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: item.color,
                borderColor: item.color,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: item.color,
                  fontWeight: "800",
                },
              }}
            >
              {item.category}
            </Button>
          ))
        : null}
    </Box>
  );
};

export default FiltersButtons;
