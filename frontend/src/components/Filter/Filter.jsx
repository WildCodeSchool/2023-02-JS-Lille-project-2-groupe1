import { useNavigate } from "react-router-dom";
import ButtonFilter from "./ButtonFilter";

function Filter() {
  const linkName = [
    "Catalogue",
    "Décoration",
    "Outil",
    "Recreation",
    "Fourniture",
    "Education",
  ];
  const navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`/${value}`);
  };

  return (
    <div className="filterContainer">
      <div className="btnFilter">
        {linkName.map((link) => (
          <ButtonFilter link={`/${link}`} name={link} key={`${link}}`} />
        ))}
      </div>
      <div className="SelectFilter">
        <select
          className="select "
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="">Select category </option>
          <option value="Catalogue">All Categories </option>
          <option value="Recreation">Recreation</option>
          <option value="Education">Education</option>
          <option value="Décoration">Decoration</option>
          <option value="Fourniture">Fourniture </option>
          <option value="Outil">Outil </option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
