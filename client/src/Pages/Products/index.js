import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (data.length > 0) console.log(data[0].products);

  return <h1>Products</h1>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Products);
