import React,{Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';




class Home extends Component {


  constructor() {
    super();
    this.state = {
      profilePic:[],
      access_token: sessionStorage.getItem("access_token"),
      loggedIn: sessionStorage.getItem("access_token") === "null" ? false:true,

    }
  }


  // onSearchChange = e => {
  //   this.setState({userImages:this.state.filteredRes});
  //   const searchText = e.target.value.toLowerCase();
  //   let userDetails = JSON.parse(
  //     JSON.stringify(this.state.userImages)
  //   );
  //   let filterRes = [];
  //   if(userDetails !== null && userDetails.length > 0) {
  //     filterRes = userDetails.filter(
  //       post =>
  //       post.caption.text.split("\n")[0].toLowerCase().indexOf(searchText)>-1
  //     );
  //     this.setState({
  //       userImages:[...filterRes],
  //     });
  //   }
  // };

  render() {
    return(
      <div>
        <Header baseUrl={this.props.baseUrl}
                showSearchBox="true" 
                profilePic={this.state.profilePic} 
                loggedIn={this.state.loggedIn}
                showAccount="true"
                // searchChangeHandler={this.onSearchChange}
                />
      </div>
    )
  }
}
export default Home;