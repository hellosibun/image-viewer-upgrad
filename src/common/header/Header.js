import React, {Component} from 'react';

import './Header.css'

class Header extends Component {

    render() {
        
        return(
            <div>
                <header className="app-header">
                    <a className="logo">Image Viewer</a>
                </header>
                
            </div>
        )
    }

}
export default Header;