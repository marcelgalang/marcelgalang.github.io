import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>

      <img className='logos' src={`${process.env.PUBLIC_URL}/img/logos.jpg`} alt='' />
      <p className="copyright">&copy; {year}  All rights reserved.</p>
  	</footer>
  )
}

export default Footer;
