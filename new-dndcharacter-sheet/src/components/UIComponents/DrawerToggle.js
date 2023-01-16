import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { toggleSideDrawer } from  "../../js/actions/uiActions"
import { toggleSideDrawer } from '../../js/actions/uiActions.js'

const mapStateToProps = (state) => {
  return {
    isOpen:false
  }
}

const mapDispatchToProps = {
  toggleSideDrawer
}

class DrawerToggle extends Component {
  constructor(props) {
    super(props);
    console.log(props, "line 19")
    this.props = props;
  }
  render(){

    return (

        <div className="DrawerToggle" onClick={this.props.toggleSideDrawer}>
          <div className="DrawerToggleItem"/>
          <div className="DrawerToggleItem"/>
          <div className="DrawerToggleItem"/>
        </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerToggle)
