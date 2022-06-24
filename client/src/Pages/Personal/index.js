import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";
import { Button } from "../../components";

const Personal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("personal"));
  }, []);

  return (
    <>
      <Button name={"worker"} endpoint={"personal"} />
      <Button name={"manager"} endpoint={"personal"} />
    </>
  );
};

export default Personal;
