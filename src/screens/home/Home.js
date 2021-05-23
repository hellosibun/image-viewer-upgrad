
import { Avatar, Card, CardContent, CardHeader, GridList, GridListTile } from '@material-ui/core';
import React,{Component} from 'react';
import { Redirect } from 'react-router';
import Header from '../../common/header/Header';
import './Home.css';
import * as moment from 'moment';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
      card: {
        maxWidth: 550,
        margin: 20,
        height: 'auto',
        marginLeft: '4%',
      },
     avatar: {
        margin: 15,
        width: 60,
        height: 60,
     },
     hr: {
        width: 460,
     },
     icon: {
        margin: theme.spacing(1),
        fontSize: 32,
     }
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            profilePic: [],
            access_token: sessionStorage.getItem("access_token"),
            loggedIn: sessionStorage.getItem("access_token") === "null" ?false:true,
            userImages: [],
            createdTime: [],
            username: "",
            captionText:[],
            captionTag:[],
            favClick: false,
            addComment: [],
            searchField: "",
            filteredRes:[],
            comments:[],
            commentText:[],
            count: 1,

        }
    }

    //implementation of serching images posted by users based on some keyword
    onSearchChange = e  => {
        this.setState({userImages:this.state.filteredRes});
        const searchText = e.target.value.toLowerCase();
        let userDetails = JSON.parse(
            JSON.stringify(this.state.userImages)
        );
        let filterRes = [];
        if(userDetails !== null && userDetails.length > 0) {
            filterRes = userDetails.filter(
                post => post.caption.text.split("\n")[0].toLowerCase()
                .indexOf(searchText) > -1
            );
            this.setState({
                userImages:[...filterRes],
            });
        }
    };

    myDateFun = (imgdate) => {
        return moment(new Date(parseInt(imgdate))).format("DD/MM/YYYY HH:mm:ss");
    }

    render() {
        const {classes} =this.props;
        return(
            <div>
                <Header 
                showSearchBox="true"
                publicPic={this.state.profilePic}
                loggedIn={this.state.loggedIn}
                showAccount = "true"
                searchChangeHandler={this.onSearchChange} />
                {this.state.loggedIn == true ?
                    <div>
                        <GridList cols={2} cellHeight='auto'>
                            {this.state.userImages.map(img =>(
                                <Card className={classes.card} key={"card"+img.id}>
                                    <CardHeader avatar={
                                        <Avatar alt="profile-Pic" src={(this.state.profilePic).toString()} className={classes.avatar}/>
                                    }
                                    title={img.user.username} subheader = {this.myDateFun(img.created_time)}>
                                    </CardHeader>
                                    <CardContent>
                                        <GridListTile key={"userImg"+img.id} className="user-image-grid-item">
                                            <img src={img.images.standard_resolution.url} className="userImage" alt={img.caption.text} />
                                        </GridListTile>
                                        <div className="imgTitleTag">
                                            <hr className={classes.hr} />
                                            <h4 className="captionText">{(img.caption.text).split("#")[0]} </h4>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </GridList>
                    </div> : <Redirect to ="/" />
                }
                
            </div>
        )
    }
}
export default Home;