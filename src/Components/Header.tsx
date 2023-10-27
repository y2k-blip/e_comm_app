import "../Styles/HeaderStyles.css";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignInCartBtn";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  // const navigateToCategories = () => {
  //   navigate("/categoriesListing");
  // };

  return (
    <header className="header">
      <div className="left-section">
        <img
          onClick={navigateToHome}
          src={"./Assets/logo.png"}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="middle-section">
        <Search></Search>
      </div>
      <div className="right-section">
        <SignIn></SignIn>
      </div>
    </header>
  );
};

export default Header;
