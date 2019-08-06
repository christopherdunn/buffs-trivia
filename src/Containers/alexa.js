import React, { Component } from 'react';
import './about.css'
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';


class alexa extends Component {
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
      <div className="image">
      <div className="about">
      <h1>Alexa Privacy Policy</h1>
      <p>1. How We Collect Your data<br/>
      We do not collect or store any of your data.</p>
<p>2. Ad Serving Technology<br/>
We do not and never will serve ads.</p>
<p>3. Location Data<br/>
We do not collect any location data.</p>
<p>4. Analytics<br/>
We do not collect your usage data.</p>
<p>5. Third Party Terms and Conditions<br/>
Please note that your access to and use of the Services may be subject to certain third party terms and conditions and Buffs Trivia is not liable for any such third parties’ use of your personal data.</p>
<p>6. Safeguards<br/>
Buffs Trivia follows generally accepted industry standards and maintains reasonable safeguards to attempt to ensure the security, integrity and privacy of the information in Buffs Trivia’s possession.</p>
<p>7. Special Note about Children’s Privacy<br/>
Buffs Trivia does not collect any personal information from children under 13 years of age.</p>

      </div>
      </div>
      </div>
    );
  }
}
export default alexa;
