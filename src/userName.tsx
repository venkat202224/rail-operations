import { useState } from "react";

const UserName = () => {
  const [userText, setUserText] = useState("Antony");
  const changeText = (event: any) => {
    setUserText(event.target.value);
  };

  return (
    <>
    <label>Username :</label> <br />
      <input type="text" onChange={changeText}  value={userText}/> <br />
      {userText}
    </>
  );
};

export default UserName;
