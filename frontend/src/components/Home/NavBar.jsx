import LogoImage from "../../assets/logoImage.jpg";

import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={LogoImage} alt="Auth Project Logo" />
          <span>Auth Project</span>
        </div>
        <div className="nav-links">
          <button className="btn login" onClick={() => loginWithRedirect()}>
            Login
          </button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
