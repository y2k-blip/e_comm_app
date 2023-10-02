import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Styles/SignInStyles.css";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/CartPage");
  };
  return (
    <div className="main-container">
      <PersonIcon className="profile"></PersonIcon>
      <div onClick={navigateToCart}>
        <ShoppingCartIcon className="cart"></ShoppingCartIcon>
      </div>
    </div>
  );
};

export default SignIn;
