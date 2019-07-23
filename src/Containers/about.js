import React, { Component } from 'react';
import './about.css'
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';


class about extends Component {
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
      <h1>About Buffs Trivia</h1>
      <p>The Buffs Trivia skill for Alexa is built by CU Alums for CU Alums.
      (We don't mind if current students play as well!) While the skill is not
      officially endorsed by the university, it is our hope, that they are proud
      of it. We further hope that they encourage people to play the game and share it with their friends.
      </p>
      <p>The game is a test of your knowledge of CU and it’s proud athletic
      traditions. Whether you like sports, pop-culture or just school history,
      we’ve got something to quiz you on. Better yet we are continuing to add questions.
      If you have something you think would make a great quiz question click in
      the link at the top and submit your question. </p>
      <p>Cheers,<br/>
      Buffs Trivia Team
      </p>
      </div>
      </div>
      </div>
    );
  }
}
export default about;
