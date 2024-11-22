interface Action {
  type: "INCREMENT" | "DECREMENT" | "CLEAR";
}

const cartReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state - 1;
  if (action.type === "CLEAR") return 0;

  return state;
};

export default cartReducer;
