import React, { Component } from 'react';
import './question.css'
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';


class question extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="">
      <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <div className="form">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeS1RKbxAmjMaDx2xuZolOakECO6ITTSQDemw5sMyFD7QAegA/viewform?embedded=true" width="100%" height="1031" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
</div>
);
}
}
export default question;
