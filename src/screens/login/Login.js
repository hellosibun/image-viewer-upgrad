import React, {Component} from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from '@material-ui/core';


class Login extends Component {

    
    render() {
        return(
            <div>
                <Header/>
                <Card className="cardStyle">
                    <CardContent>
                        <Typography variant="h4">
                            LOGIN
                        </Typography> <br/>

                        <FormControl required className="formControl">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text"  />
                        </FormControl><br/><br/>

                        <FormControl required className="formControl">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password"  />
                        </FormControl><br/><br/>
                        <Button variant="contained"  color="primary">
                            Login </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default Login;