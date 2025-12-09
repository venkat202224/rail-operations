import { Link } from "react-router-dom"
const Header = () =>{


return (<>
<h1 className="header">Hello React App</h1>

<div className="navbar">
<ul>
<Link to="/table" ><li>Table</li></Link>
<Link to="/signup" ><li>Signup</li></Link>
<Link to="/login" ><li>Login</li></Link>
<Link to="/search"><li>Search</li></Link>
<Link to="/searchBox"><li>Search</li></Link>
</ul>
</div>
</>
)
}

export default Header