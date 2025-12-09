import { useEffect, useState  } from "react"; 
const DailyStatus = () => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const tday = new Date();
    setCurrentTime(tday.getHours());
  }, []);

  const clickHandlere = () => {
    console.log("hello");
    {
      document.body.style.backgroundColor = "black";
    }
  };

  return ( <>
      <p>{currentTime}</p>
      <p>{currentTime >= 0 && currentTime < 12 ? "Morning" : ""} </p>
      <p>{currentTime >= 12 && currentTime < 16 ? "Afternoon" : ""} </p>
      <p>{currentTime > 16 && currentTime < 18 ? "Evening" : ""} </p>
      <p>{currentTime >= 18 && currentTime < 24 ? "Night" : ""} </p>
      <button onClick={clickHandlere}>Click</button>
    </>
  );
};
export default DailyStatus;
