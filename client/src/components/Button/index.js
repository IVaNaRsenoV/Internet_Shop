import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";

export const Button = ({ endpoint, name }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const getInfo = (event) => {
    event.preventDefault();
    dispatch(fetchData(`${endpoint}?type=${name}`));
    let test = data.filter(({ type }) => type === name);
    console.log(test);
  };

  return <button onClick={getInfo}>{name}</button>;
};
