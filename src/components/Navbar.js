// import React from 'react';

// import { Link } from 'react-router-dom';
// import {GiHamburgerMenu} from 'react-icons/gi';

// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <header>
//       <nav>
       
//        <div>
//         <ul ClassName="nav">
          
//           <li><Link to="/students">Students</Link></li>
//           <li><Link to="/companies">Companies</Link></li>
//           <li><Link to="/colleges">Colleges & Universities</Link></li>
       
//           </ul>

//           <div>
//           <ul>

//           <Link to="/login">Login</Link>
//           <button ClassName='btn'><Link to="/signup">Sign Up</Link></button>
//           </ul>
//           </div>
//           <div ClassName='hamburger-menu'>
//             <a href='#'>
//               <GiHamburgerMenu/>
//               </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="navbar">
          
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul className="nav">
              <li><Link to="/students" onClick={() => setIsOpen(false)}>Students</Link></li>
              <li><Link to="/companies" onClick={() => setIsOpen(false)}>Companies</Link></li>
              <li><Link to="/colleges" onClick={() => setIsOpen(false)}>Colleges & Universities</Link></li>
            </ul>
            <div className="auth-links">
              <ul>
                <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
                <li><button className="btn" onClick={() => setIsOpen(false)}><Link to="/signup">Sign Up</Link></button></li>
              </ul>
            </div>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
