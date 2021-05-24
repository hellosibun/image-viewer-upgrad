import { Avatar, Divider, FormControl, IconButton, Input, Menu, MenuItem, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router';
import logo from '../../assets/logo.png';

const styles = (theme => ({
  menuList: {
    width: 150,
    padding: 0,
    marginLeft: 7,
  },
}))

class Header extends Component {

  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      loggedIn: sessionStorage.getItem("access_token") == null ? false : true,
      anchorEl: null,
    }
  }

  // Modal Handler methods for opening and menu list on defined action events


  openMenuHandler = () => {
    this.setState({ menuIsOpen: true });
  }

  closeMenuHandler = () => {
    this.setState({ menuIsOpen: false });
  }

  // click event to execute logout function
  logoutClickHandler = () => {
    sessionStorage.removeItem("access_token");
    this.setState({ loggedIn: false });
  }

  onProfileIconClickHandler = (event) => {
    this.state.anchorEl ? this.setState({ anchorEl: null }) :
      this.setState({ anchorEl: event.currentTarget });
    this.openMenuHandler();
  }

  accountClickHandler = () => {
    ReactDOM.render(<div></div>,document.getElementById('root'));
  }

  goToLoginPage = () => {
    if(this.state.loggedIn === false) {
      return <Redirect to ="/"/>
    }
  }


  render() {
    return (
      <div>
        
        <header className="app-header">
          <a className="logo" href="/home">Image Viewer</a>

          {/* added search bar */}
          {this.props.showSearchBox === "true" ?
            <div className="searchBox">
              {/* <img src={logo} className="app-logo" alt="search logo"/> */}
              <SearchIcon />
              <FormControl className="formControl">

                <Input className="searchText" type="text" placeholder="Search..." disableUnderline={true}
                  onChange={this.props.searchChangeHandler} />
              </FormControl>
            </div> : ""}

          {/*User Profile Icon*/}

          {this.props.loggedIn === true ?
            <span>
              <IconButton className="iconBtn" size="medium" onClick={event => this.onProfileIconClickHandler(event)}>
                <Avatar className="avatar">
                  <img className="profilePic" src={logo}
                    alt="logged in user profile pic" />
                </Avatar>
              </IconButton>

              {/* Menulist added to click event on profile pic icon of logged in user */}
              <Menu className="menubar" anchorEl={this.state.anchorEl}
              open={this.state.menuIsOpen} onClose={this.closeMenuHandler}>
                {this.props.showAccount === "true" ?
                  <div>
                    <MenuItem onClick={this.accountClickHandler}>My Account</MenuItem><Divider variant="middle"/>
                  </div> : ""}
                  <MenuItem onClick={this.logoutClickHandler}>Logout</MenuItem>
              </Menu>
            </span> : ""}
        </header> <br/>
      </div>
    )
  }
}
export default withStyles(styles)(Header);