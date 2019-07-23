import React, {Component} from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class home extends Component {
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
      <div>
      <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div className="hero">
        <div className="story">
        <h1>Go Buffs</h1>
        <p>Buffs Trivia is the fun Alexa Skill that allows you test your knowledge
        of CU trivia both on and off the field. Better yet, you have the option to submit
        a question here on the site that might featured in an upcoming update.
        So be sure to fill out the form and tell all your friends.</p>
        <button>Submit a Question</button>
        </div>

        </div>

      </div>

    );
  }
}
export default home;
