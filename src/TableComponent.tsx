import { useState } from "react";
import SearchBox from "./SearchBox.Component";

const Table = () => {
  const personsList: any = [
    { name: "Ramu", age: "20" },
    { name: "Raju", age: "21" },
    { name: "Rajesh", age: "24" },
    { name: "Rahul", age: "25" },
    { name: "Rajiv", age: "26" },
  ];

const [search , setSearch] = useState('');

 const searchData = (Event:any) => {
  setSearch(Event.target.value);
 }

const filterData = personsList.filter((item:any)=>
item.name.toLowerCase().includes(search.toLowerCase()) ||
item.age.toLowerCase().includes(search.toLowerCase())
);

  return <>
      <SearchBox searchData={searchData}/>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>

      <tbody>
        {filterData.map((item: any, i: number) => {
          return (
            <tr>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
 </>
      
};
export default Table ;
