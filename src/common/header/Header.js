import { FormControl, Input } from '@material-ui/core';
import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const styles = (theme => ({
    menuList: {
      width: 150,
      padding: 0,
      marginLeft: 7,
    },
}))

class Header extends Component {

    

    render() {
        return(
            <div>
                <header className="app-header">
                    <a className="logo">Image Viewer</a>
                    {/* added search bar */}
                    {this.props.showSearchBox=== "true" ?
                    <div className="searchBox">
                        <img src={logo} className="app-logo" alt="search logo"/>
                        <FormControl className="formControl">
                            <Input className="searchText" type="text" placeholder="Search..." 
                            disableUnderline={true} onChange={this.props.searchChangeHandler} />
                        </FormControl>
                    </div> : ""}
                </header>                
            </div>
        )
    }
}
export default Header;