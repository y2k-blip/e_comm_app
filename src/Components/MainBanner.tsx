import { useNavigate } from 'react-router-dom';
import '../Styles/MainBannerStyles.css';

const MainBanner = () => {
  const navigate = useNavigate();
  const navigateToListingPage = () => {
    navigate("/productListing");
  };
  return (
    <div className="main-banner">
      <img
        src={"./Assets/carouselCologne.jpg"}
        alt="Main Banner"
        className="banner-image"
      />
      <div className="banner-content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p><p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p><p> nisi ut aliquip ex ea commodo consequat.</p>
        <button onClick={navigateToListingPage} className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default MainBanner;
