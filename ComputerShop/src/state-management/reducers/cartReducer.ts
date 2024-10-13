export interface Item {
  items: number;
}

export interface Action {
  type: "INCREMENT";
}

const cartReducer = (state: Item, action: Action): Item => {
  if (action.type === "INCREMENT") return { items: state.items + 1 };
  return state;
};

export default cartReducer;
