import React, { useState, useEffect } from 'react';
import Images from './assets/img';

const ShoeCompanyHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [Images.red, Images.blue, Images.green]; // Add more images as needed
  const delay = 5000; // Delay between image changes in milliseconds (5 seconds in this example)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const heroSectionStyle = {
    backgroundImage: `url(${backgroundImages[currentImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-image 0.5s ease', // Add a smooth transition
  };

  const shoeStyle = {
    width: '150px',
    height: '150px',
    background: 'gray', // Customize this with your shoe images
    margin: '10px',
  };

  return (
    <div style={heroSectionStyle}>
      
      {/* Hero Content */}
      <div style={heroSectionStyle}>
        <h1 style={{ fontSize: '2.5rem',color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Discover Our Latest Shoe Collection</h1>
        <p style={{ fontSize: '1.25rem',color: 'black', marginBottom: '40px' }}>Step into style and comfort with our premium footwear.</p>
        <a href="/shop" style={{ backgroundColor: 'blue', color: 'white', fontSize: '1.25rem', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none' }}>Shop Now</a>
      </div>
    </div>
  );
};

export default ShoeCompanyHero;
