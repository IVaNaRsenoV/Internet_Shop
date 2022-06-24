import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";
import { Button } from "../../components";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("products"));
  }, []);

  return (
    <>
      <Button name={"notebook"} endpoint={"products"} />
      <Button name={"TV"} endpoint={"products"} />
    </>
  );
};

export default Products;
