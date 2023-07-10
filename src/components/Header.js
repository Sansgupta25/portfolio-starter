import React from 'react';
import Logo from '../assets/logo.svg';
import Logo1 from '../assets/logo1.png';
const Header = () => {
  return <header className=''>
  
  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>

      <a href='#'>
        {/* <img style={{ width: 200, height: 70 }} src={Logo1} alt =''></img> */}
      </a>

      <button className='btn btn-sm mt-5 mb-3'>Work with me</button>
    </div>
    


  </div>

  </header>;
};

export default Header;
