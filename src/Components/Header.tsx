import "../Styles/HeaderStyles.css";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignInCartBtn";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  }

  return (
    <header className="header">
      <div className="left-section">
        <img onClick={navigateToHome} src={"./Assets/logo.png"} alt="Logo" className="logo"/>
      </div>
      <div className="right-section">
        <SignIn></SignIn>
      </div>
    </header>
  );
};

export default Header;
