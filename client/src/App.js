import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import selector from "./redux/selector";
import { fetchCustomers } from "./redux/asyncFunc";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
    console.log(selector, " selector");
  }, []);

  console.log(props);
  return <div className="sdf"></div>;
};

export default connect((state) => state)(App);
