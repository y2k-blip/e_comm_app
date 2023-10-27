import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Styles/SignInCartBtnStyles.css";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const SignInCartBtn: React.FC = ({}) => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/CartPage");
  };
  const navigateToSignIn = () => {
    navigate("/SignIn");
  };
  return (
    <>
      <div className="main-container">
        <div className="signIn-container" onClick={navigateToSignIn}>
          <PersonIcon className="profile"></PersonIcon>
          <div className="signIn-text">SignIn</div>
        </div>

        <div className="cart-container" onClick={navigateToCart}>
          <ShoppingCartIcon className="cart"></ShoppingCartIcon>
          <div className="cart-text">My Cart</div>
        </div>
      </div>
    </>
  );
};

export default SignInCartBtn;
