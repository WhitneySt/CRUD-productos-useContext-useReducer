import axios from "axios";
import endpoints from "./endpoints";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(endpoints.products);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const { data } = await axios.get(endpoints.productsByCategory(category));
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const { data } = await axios.get(endpoints.products);
    const allCategories = data.map((item) => item.category);
    const categories = new Set(allCategories);
    return [...categories];
  } catch (error) {
    console.log(error);
    return [];
  }
};
