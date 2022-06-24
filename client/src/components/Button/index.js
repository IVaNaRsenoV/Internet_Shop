import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";

export const Button = ({ endpoint, name }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  console.log(data);

  const getInfo = async (event) => {
    event.preventDefault();
    await dispatch(fetchData(`${endpoint}?type=${name}`));
  };

  return <button onClick={getInfo}>{name}</button>;
};
