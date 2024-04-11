import axios from "axios";
import endpoints from "./endpoints";

export const getUserByEmailAndPassword = async ({ email, password }) => {
  try {
    const { data } = await axios.get(
      endpoints.userByEmailAndPassword(email, password)
    );
    return data.length ? data[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
