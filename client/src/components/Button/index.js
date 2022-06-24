import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/toolkitReducer";

export const Button = ({ endpoint, name }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch(fetchData(`${endpoint}?type=${name}`));
      }}
    >
      {name}
    </button>
  );
};
