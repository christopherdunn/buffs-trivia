import React from 'react';
import './SideDrawer.css';
const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses='side-drawer open';
  }
  return(
  <nav className={drawerClasses}>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/portfolio">Submit a Question</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
  );
};

export default sideDrawer;
