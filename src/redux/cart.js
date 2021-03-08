const GROCERY_ITEMS = [
  { name: "Sliced bacon", price: 5.79 },
  { name: "Pasta", price: 1.28 },
  { name: "Dried beans", price: 1.36 },
  { name: "Ground beef", price: 4.12 },
  { name: "All-purpose flour", price: 0.52 },
  { name: "Creamy peanut butter", price: 2.56 },
  { name: "Top round steak", price: 5.78 },
  { name: "Potatoes", price: 0.72 },
  { name: "Frozen turkey", price: 1.59 },
  { name: "Sirloin steak", price: 8.07 },
  { name: "White rice", price: 0.72 },
  { name: "Chocolate chip cookies", price: 3.47 },
  { name: "Seedless grapes", price: 2.67 },
  { name: "Sugar", price: 0.65 },
  { name: "Ice cream", price: 4.7 },
];
const initialState = {
  cart: [],
  forSale: GROCERY_ITEMS,
  history: [[]],
  historyIndex: 0,
};

export const cartReducer = (state = initialState, { type, item, index }) => {
  switch (type) {
    case "ADD_TO_CART":
      const cartCopyAdd = [...state.cart, item];
      const historyAdd = [...state.history, cartCopyAdd];
      const historyIndexAdd = state.historyIndexAdd + 1;
      return {
        ...state,
        cart: cartCopyAdd,
        history: historyAdd,
        historyIndexAdd,
      };
    case "REMOVE_FROM_CART":
      const cartCopyRemove = [...state.cart];
      cartCopyRemove.splice(index, 1);
      return {
        ...state,
        cart: cartCopyRemove,
      };
    case "UNDO":
      let historyIndexUndo = state.historyIndex - 1;
      historyIndexUndo = Math.max(historyIndexUndo, 0);
      return {
        ...state,
        cart: state.history[historyIndexUndo],
        historyIndex: historyIndexUndo,
      };
    case "REDO":
      let historyIndexRedo = state.historyIndex + 1;
      historyIndexRedo = Math.min(historyIndexRedo, state.history.length - 1);
      return {
        ...state,
        cart: state.history[historyIndexRedo],
        historyIndex: historyIndexRedo,
      };
    default:
      return state;
  }
};
