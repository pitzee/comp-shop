interface Action {
  type: "INCREMENT";
}

const cartReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  return state;
};

export default cartReducer;
