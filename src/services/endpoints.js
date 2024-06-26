const URL_BASE = "http://localhost:3000/";

const endpoints = {
  userByEmailAndPassword: (email, password) =>
    `${URL_BASE}users?email=${email}&password=${password}`,
  users: `${URL_BASE}users`,
  products: `${URL_BASE}products`,
  productsByCategory: (category) => `${URL_BASE}products?category=${category}`,
};

export default endpoints;
