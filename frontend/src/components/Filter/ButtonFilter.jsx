import { useNavigate } from "react-router-dom";

function ButtonFilter({ link, name }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${link}`);
  };

  return (
    <button
      className="filterButton"
      type="button"
      onClick={() => handleClick()}
    >
      {name}
    </button>
  );
}
export default ButtonFilter;
