import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Styles/SignInCartBtnStyles.css";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const SignInCartBtn = () => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/CartPage");
  };
  const navigateToSignIn = () => {
    navigate("/SignIn");
  };
  return (
    <div className="main-container">
      <div onClick={navigateToSignIn}>
        <PersonIcon className="profile"></PersonIcon>
      </div>
      <div onClick={navigateToCart}>
        <ShoppingCartIcon className="cart"></ShoppingCartIcon>
      </div>
    </div>
  );
};

export default SignInCartBtn;
