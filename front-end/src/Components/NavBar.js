import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </div>
    </nav>
  );
}

export default NavBar;
