import { useState } from "react";
const FilterRail = () => {
const [open , setOpen] = useState(false)


const showList =()=>{
setOpen(!open);
}


 return <>
 <button  onClick={showList} className="collapsible">🝖</button>
 
<ul className={`side-menu ${open ? "open" : ""}`}>
    <h1>Train Groups</h1>
<li>All Trains</li>
<li>UPS Trains</li>
<li>Zero Based Trains</li>
<li>Ups Trains</li>
<li>Trop</li>
<li>Mandatory Dp</li>
<li>Focus Train</li>
<li>Energy</li>
<li>Auto</li>
</ul>
 </>
    
}

export default FilterRail;