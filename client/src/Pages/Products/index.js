import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";
import { Button } from "../../components";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("products"));
  }, []);

  if (data.length > 0) console.log(data);

  return (
    <>
      <Button name={"notebook"} endpoint={"products"} />
      <Button name={"TV"} endpoint={"products"} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Products);
