import { useState } from "react";
const FilterRail = () => {
  const TrainData = [
    "All Trains",
    "UPS Trains",
    "Zero Based Trains",
    "Trop",
    "Mandatory Dp",
    "Focus Train",
    "Energy",
    "Auto",
  ];

  const [open, setOpen] = useState(false);
  const showList = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={showList} className="collapsible">
        <img
          src="https://i.postimg.cc/tR2pM5RJ/filter-icon-svg.png"
          alt="filter image"
        />
      </button>
      <ul className={`side-menu ${open ? "open" : ""}`}>
        {...TrainData.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
};

export default FilterRail;
