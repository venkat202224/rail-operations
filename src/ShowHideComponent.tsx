import { useState } from "react";

const Showhide =()=>{

const [showPara , setShowPara] = useState(false)
const togglePara =()=>{
console.log(showPara,"before")
setShowPara(!showPara)
console.log(!showPara,"after")
}

return<>
<button onClick={togglePara}
>click me</button>
{showPara==true ? <p>Welcome to the toggle</p> : ""}
</>


}
export default Showhide ;