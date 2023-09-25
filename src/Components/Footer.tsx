import React from 'react';

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="footer-content">
      <div>
        <p>&copy; {year} {companyName}</p>
      </div>
    </footer>
  );
};

export default Footer;