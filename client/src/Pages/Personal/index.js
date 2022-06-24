import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";
import { Button } from "../../components";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("personal"));
  }, []);

  if (data.length > 0) console.log(data);

  return (
    <>
      <Button name={"worker"} endpoint={"personal"} />
      <Button name={"manager"} endpoint={"personal"} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Products);
