import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`/${value}`);
  };

  return (
    <div className="filterContainer">
      <select
        className="select "
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="">Select category </option>

        <option value="Houseware">Houseware</option>
      </select>

      <div className="Header"> </div>
    </div>
  );
}
export default Filter;
