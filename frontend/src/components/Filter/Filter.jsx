import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`/${value}`);
  };

  const handleHouseware = () => {
    navigate(`/Houseware`);
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

      <div className="Header">
        <Button
          className="btn"
          onClick={() => handleHouseware()}
          size="lg"
          variant="warning"
        >
          Houseware
        </Button>
      </div>
    </div>
  );
}
export default Filter;
