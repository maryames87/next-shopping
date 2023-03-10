import { createContext, useReducer } from "react";

export const shoppingContext = createContext();
 export const shoppingCardActions = {
  add: "ADD_PRODUCT",
  remove: "REMOVE_PRODUCT",
};
function shoppingCardReduser(state, action) {
  switch ((action, type)) {
    case shoppingCardActions.add:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case shoppingCardActions.remove:
      const filteredProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filteredProduct,
      };
    default:
      return state;
  }
}

const shoppingContextProvider = ({ children }) => {
  const [shoppingCard, dispatch] = useReducer(shoppingCardReduser, {
    products: [],
    amount: 0,
  });
  return (
    <shoppingContext.Provider value={{ shoppingCard, dispatch }}>
      {children}
    </shoppingContext.Provider>
  );
};
export default shoppingContextProvider;
