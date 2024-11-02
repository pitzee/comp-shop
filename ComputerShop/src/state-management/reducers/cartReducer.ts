interface Action {
  type: "INCREMENT" | "DECREMENT";
}

const cartReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state - 1;
  return state;
};

export default cartReducer;
