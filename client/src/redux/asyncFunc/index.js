export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET", payload: data }));
  };
};
