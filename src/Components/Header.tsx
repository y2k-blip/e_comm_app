import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "../Styles/HeaderStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event: { target: { value: any } }) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/CartPage");
  }

  return (
    <header className="header">
      <div className="left-section">
        <nav>
          <ul className="categories">
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>Category 1</InputLabel>
              <Select
                label="Category 1"
                onChange={handleOptionChange}
                value="Category 1"
              >
                <MenuItem value="Option1">Type1</MenuItem>
                <MenuItem value="Option2">Type2</MenuItem>
                <MenuItem value="Option3">Type3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>Category 2</InputLabel>
              <Select
                label="Category 2"
                onChange={handleOptionChange}
                value="Category 2"
              >
                <MenuItem value="Option1">Type1</MenuItem>
                <MenuItem value="Option2">Type2</MenuItem>
                <MenuItem value="Option3">Type3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>Category 3</InputLabel>
              <Select
                label="Category 3"
                onChange={handleOptionChange}
                value="Category 3"
              >
                <MenuItem value="Option1">Type1</MenuItem>
                <MenuItem value="Option2">Type2</MenuItem>
                <MenuItem value="Option3">Type3</MenuItem>
              </Select>
            </FormControl>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <div className="cart">
          <Button onClick={navigateToCart}><span className="cart-icon">🛒</span></Button>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
