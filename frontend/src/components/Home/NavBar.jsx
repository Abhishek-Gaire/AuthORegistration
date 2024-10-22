import LogoImage from "../../assets/logoImage.jpg";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={LogoImage} alt="Auth Project Logo" />
          <span>Auth Project</span>
        </div>
        <div className="nav-links">
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
