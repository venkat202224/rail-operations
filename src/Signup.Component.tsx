import { useState } from "react";

const Signup = () => {
  // main variables

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [personsList, setPersonsList] = useState<any>([]);

  // const personsList =[
  // {personName : name , personeUserName : username , personEmail : email , personMobile : mobile  , personPassword :password},
  // ]

  // error variables
  const [nameError, setNameError] = useState("");
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [search, setSearch] = useState("");

  // button validation
  const submitBtn = () => {
    if (name == "") {
      setNameError("Please enter your name");
    }

    if (username == "") {
      setUserError("Please enter your username");
    }

    if (email == "") {
      setEmailError("Please enter your email address");
    }

    if (mobile == "") {
      setMobileError("Please enter your mobile number");
    }

    if (password == "") {
      setPasswordError("Please enter your password");
    }

    if (!checkbox) {
      setCheckboxError("agree conditions");
    }

    if (name && username && email && mobile && password) {
      const tableData: any = {
        personName: name,
        personUserName: username,
        personEmail: email,
        personMobile: mobile,
        personPassword: password,
      };
      setPersonsList((prevArray: any[]) => [...prevArray, tableData]);
    }
  };

  // reset btn

  const resetBtn = () => {
    setName("");
    setUsername("");
    setEmail("");
    setMobile("");
    setPassword("");
    // setMobile('');
    // console.log("hello");
  };

  // input validation

  const handleNameChange = (Event: any) => {
    setName(Event.target.value);
    if (Event.target.value == "") {
      setNameError("enter name");
    } else {
      setNameError("");
    }
  };

  const handleUserNameChange = (Event: any) => {
    setUsername(Event.target.value);
    if (Event.target.value == "") {
      setUserError("enter username");
    } else {
      setUserError("");
    }
  };

  const handleEmailChange = (Event: any) => {
    setEmail(Event.target.value);
    if (Event.target.value == "") {
      setEmailError("enter email");
    } else {
      setEmailError("");
    }
  };

  const handleMobileChange = (Event: any) => {
    setMobile(Event.target.value);
    if (Event.target.value == "") {
      setMobileError("enter  mobile number");
    } else {
      setMobileError("");
    }
  };

  const handlePasswordChange = (Event: any) => {
    setPassword(Event.target.value);
    if (Event.target.value == "") {
      setPasswordError("enter password");
    } else {
      setPasswordError("");
    }
  };
  const handleCheckboxChange = () => {
    if (!setCheckbox) {
      setCheckboxError("jcvchqbbbivyv");
    }
  };

  // password show-hide validation

  const passwordTypeChange = () => {
    console.log("Test");
    setShowPassword(!showPassword);
  };

  // search code
  const searchMsg = (Event: any) => {
    setSearch(Event.target.value);
  };

  const filterTable = personsList.filter((item: any) =>
    item.personName.toLowerCase().includes(search.toLowerCase()) ||
    item.personUserName.toLowerCase().includes(search.toLowerCase())
  );

  // return code

  return (
    <>
      <div className="Section">
        <div className="nameSection">
          <h1>Sign up </h1>
          <label>Name</label>
          <input type="text" onChange={handleNameChange} value={name} />
          <p>{nameError}</p>
        </div>

        <div className="usernameSection">
          <label>Username</label>
          <input type="text" onChange={handleUserNameChange} value={username} />
          <p>{userError}</p>
        </div>

        <div className="emailSection">
          <label>Email address</label>
          <input type="text" onChange={handleEmailChange} value={email} />

          <p>{emailError}</p>
        </div>

        <div className="numberSection">
          <label>Mobile No</label>
          <input type="number" onChange={handleMobileChange} value={mobile} />

          <p>{mobileError}</p>
        </div>

        <div className="passwordSection">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            value={password}
          />
          <button onClick={passwordTypeChange}>
            {!showPassword ? "show" : "hide"}
          </button>
          <p>{passwordError}</p>
          <p>
            {passwordError.length > 8
              ? "Atleast set 8 characters or above"
              : ""}
          </p>
        </div>
        <div className="checkboxSection">
          <label>
            <input type="checkbox" onChange={handleCheckboxChange} />I agree for
            terms & conditions
          </label>
          <p>{checkboxError}</p>
        </div>

        <button onClick={submitBtn}>Submit</button>
        <button onClick={resetBtn}>RESET</button>
      </div>

      <input type="text" placeholder="search here" onChange={searchMsg} />
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {filterTable?.map((item: any, i: number) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{item.personName}</td>
                <td>{item.personUserName}</td>
                <td>{item.personEmail}</td>
                <td>{item.personMobile}</td>
                <td>{item.personPassword}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Signup;
