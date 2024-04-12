import { Box, Button } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/productServices";

const styleBox = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  padding: "10px",
};

const FilterButtons = ({ categories = [] }) => {
  const {
    products: { productsDispatch },
  } = useAppContext();

  const handleFilter = async (category = "all") => {
    const Filteredproducts =
      category === "all"
        ? await getProducts()
        : await getProductsByCategory(category);
    const isActiveFilter = category === "all" ? false : true;
    productsDispatch({
      type: "FILTERPRODUCTS",
      payload: {
        products: Filteredproducts,
        isActiveFilter,
      },
    });
  };

  return (
    <Box sx={styleBox}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleFilter()}
        sx={{
          backgroundColor: "#76e8ba",
          borderColor: "#76e8ba",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#76e8ba",
            fontWeight: "800",
          },
        }}
      >
        All
      </Button>
      {categories.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          color="secondary"
          onClick={() => handleFilter(item)}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default FilterButtons;
