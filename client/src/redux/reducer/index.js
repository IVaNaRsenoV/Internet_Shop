export const initialState = {
  test: "test",
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET":
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default reducer;
