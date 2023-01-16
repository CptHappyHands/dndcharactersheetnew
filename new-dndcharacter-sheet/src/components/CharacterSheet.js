import React, { Component } from 'react';
import { render } from 'react-dom';
import Traits from "./Traits/traits";
import SideDrawer from "./UIComponents/sideDrawer"
import css from '../css/CharacterSheet.css';

class CharacterSheet extends Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.props = props;
  }

  render() {
    const sideDrawer = <SideDrawer />

    return (
      <div className="CharacterSheet">

        <Traits />
        <div>

        <SideDrawer />
        </div>
      </div>

    )
  }
}

export default CharacterSheet
