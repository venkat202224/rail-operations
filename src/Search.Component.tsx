import { useMemo, useState } from "react";
const Search = () => {
  

  const List = {
    AP: ["DA", "KP", "BR", "ER", "KY", "EK", "LO", "KD", "CV"],
    AT: [
      "GR",
      "FN",
      "MY",
      "AT",
      "AB",
      "WA",
      "AW",
      "GM",
      "BM",
      "KA",
      "CA",
      "SC",
      "BT",
      "SM",
      "MA",
      "MM",
      "MT",
      "FL",
      "MB",
      "MO",
      "NO",
    ],
    AY: [
      "FR",
      "WO",
      "WS",
      "RE",
      "SW",
      "DT",
      "DW",
      "RO",
      "BW",
      "BE",
      "BT",
      "ER",
      "NF",
      "ST",
      "SE",
      "SS",
      "WT",
      "MA",
      "BH",
      "NB",
      "KI",
      "OP",
      "CH",
      "OI",
    ],
    BA: [
      "RF",
      "BR",
      "HA",
      "CE",
      "CU",
      "CW",
      "JE",
      "WI",
      "BE",
      "BW",
      "BT",
      "HV",
      "GR",
      "PH",
      "PJ",
      "CO",
      "GW",
      "NC",
      "NA",
      "DE",
      "WL",
      "WT",
      "CL",
      "BN",
    ],
    CB: ["MT", "GR", "PK", "BN", "BJ", "NE"],
    CG: [
      "DE",
      "GA",
      "CG",
      "OT",
      "ND",
      "PM",
      "CE",
      "CD",
      "LY",
      "AT",
      "HD",
      "EV",
      "NC",
      "LA",
      "NA",
      "OK",
      "SN",
    ],
    DE: [
      "TC",
      "MI",
      "DT",
      "PL",
      "T1",
      "PM",
      "SC",
      "GE",
      "GT",
      "GW",
      "WO",
      "LA",
    ],
    FB: ["LK", "MU", "RP", "TA", "HI"],
    FL: [
      "AS",
      "RS",
      "RM",
      "NC",
      "FS",
      "FT",
      "FL",
      "CR",
      "CH",
      "AN",
      "SA",
      "RT",
      "WM",
      "AU",
      "AG",
      "GV",
      "SB",
      "AB",
      "HB",
      "HT",
      "CA",
      "CT",
      "GW",
      "WS",
    ],
    GL: ["WC", "NW", "NT", "NE", "CN", "CT", "CW"],
    HU: [
      "PS",
      "RV",
      "CF",
      "AL",
      "CV",
      "NR",
      "QU",
      "SC",
      "HU",
      "BS",
      "CH",
      "CN",
      "NO",
      "RU",
      "LY",
      "NN",
      "RA",
      "CS",
      "DA",
      "ER",
      "PC",
      "PA",
      "SH",
      "MA",
      "EK",
    ],
    IN: ["IN", "IT", "MV", "AN", "IE", "IW", "TH", "RL"],
    JX: [
      "SJ",
      "ST",
      "AL",
      "JC",
      "JT",
      "SL",
      "WT",
      "WX",
      "BA",
      "DO",
      "FS",
      "BB",
      "WW",
      "TT",
      "PD",
    ],
    LO: ["DY", "BS", "BT", "TD", "LH", "CI", "LC", "MS", "LT"],
  };
console.log(List);
const listKeys=Object.keys(List);
console.log(listKeys);

const [dataKeys , setDataKeys] = useState(listKeys);

// function pickValue(arr:any) {
// if (!Array.isArray(arr) || arr.length === 0) return "-";
// return arr[0];
// }

// const [query, setQuery] = useState("");


// const filteredPairs = useMemo(() => {
// return Object.entries(List)
// .filter(([k]) => k.toLowerCase().includes(query.trim().toLowerCase()))
// .map(([k, v]) => `${k}-${pickValue(v)}`);
// }, [List]);

  return (
    <>
      <p>Hello</p>
    
<div className="dropdown">
  <label>Filter Keys</label> <br/>
   <input className="dropbtn" placeholder="Search here"/>
 <div className="dropdown-content">
{dataKeys.map((item) => (
  <a key={item} href="#">{item}</a>
))}

  </div>





  
{/* <input className="dropbtn" value={query} onChange={(e:any)=> setQuery(e.target.value)}  placeholder="Search here"/>
  <div className="dropdown-content">
{filteredPairs.map((item) => (
  <a key={item} href="#">{item}</a>
))}

  </div> */}
</div>
  </>)
};

export default Search;
