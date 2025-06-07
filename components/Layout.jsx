import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../src/assets/css/style.css';

// const Layout = ({ children }) => {
//   return (
//     <main>
//       <Sidebar />

//       <div className="navbar-wrapper">
        
//       </div>

//       <div className="main-content">
//         {children}
//       </div>
//     </main>
//   );
// };
const Layout = ({ children }) => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </main>
  );
};


export default Layout;
