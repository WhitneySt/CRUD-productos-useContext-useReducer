import { createContext, useContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import productsReducer from "../reducers/productsReducer";

// 1. Crear el contexto

const AppContext = createContext(null);

// 2. Proveer el contexto

export const AppContextProvider = ({ children }) => {
    //4.2. Aquí vamos a declarar los estados con useReducer para poderlos compartir en el contexto

    const initialUser = {
      user: null,
      isAuth: false,
    };

    const initialProducts = {
        products:[]
    }

    const [user, userDispatch] = useReducer(userReducer, initialUser);
    const [products, productsDispatch] = useReducer(productsReducer, initialProducts);


    const globalState = {
      user: { user, userDispatch },
      products: { products, productsDispatch },
    };

  return <AppContext.Provider value={{...globalState}}>{children}</AppContext.Provider>;
};


// 3. Crear el hook personalizado para poder consumir el contexto en cualquier componentente

export const useAppContext = () => useContext(AppContext);
