import { Link, useNavigate } from "react-router-dom";
import "./New.css";
const Headers = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="header-section">
        <h1 onClick={navigateToHome}> Rail Tech Info</h1>
        <div className="nav">
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/submission">
              <li>Submission</li>
            </Link>
            <Link to="/crew">
              <li>Crew</li>
            </Link>
            <Link to="/terminal">
              <li>Terminal</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Headers;
