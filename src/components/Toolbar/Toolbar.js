import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link } from 'react-router-dom';
// import buffalo from '../../../images/buffalo.png'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo"><Link to="/"><img height="45px" src={process.env.PUBLIC_URL + '/images/buffalo.png'}/>Trivia</Link></div>
      <div className="spacer" />
      <div className="toolbar__toggle-button">
      <DrawerToggleButton click={props.drawerToggleClickHandler}/>
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/submit-a-question">Submit a Question</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)


export default toolbar
