import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerToggle from './DrawerToggle';
// import RegisterButton from '../Buttons/RegisterButton';
// import LoginButton from '../Buttons/LoginButton';
// import LogoutButton from '../Buttons/LogoutButton';

const mapStateToProps = (state) => {
  return {
    auth:true
  }
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render(){
    const {auth} = this.props;
    const drawerToggle = auth ? <DrawerToggle/> : null;
    // const {button1} = auth.uid ? null : <LoginButton />
    // const {button2} = auth.uid ? <LogoutButton /> : <RegisterButton />

    return (
      <div>
        <div className="ui Header">
          <h1>Character Sheet 5e</h1>
          {drawerToggle}

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
