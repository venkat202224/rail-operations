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
        🝖
      </button>
      <ul className={`side-menu ${open ? "open" : ""}`}>
        {...TrainData.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
};

export default FilterRail;
