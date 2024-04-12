//4.1. Definir la función reductora 

// const action = {
//     type: "SETPRODUCT",
//     payload: id
// };


const productsReducer = (state, action) => {
    switch (action.type) {
        case "FILLPRODUCT":  
            return {
                ...state,
                products: action.payload
            }
        case "FILLCATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "DELETEPRODUCT":
            const deletedProduct = state.products.filter(product => product.id != action.payload);
            return {
                ...state,
                products: deletedProduct
            }
        case "FILTERPRODUCTS":
            return {
                ...state,
                products: action.payload.products,
                activeFilter: action.payload.activeFilter
            }
        default:
            return state;
    }
}

export default productsReducer;