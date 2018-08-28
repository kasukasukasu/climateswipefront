import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import TaskList from './components/TasksList';
import TheSwipe from './components/TheSwipe';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Home/>
                    <Grid>
                        <Switch>
                            <Route path="/Home" component={Home}/>
                            <Route path="/Login" component={Login}/>
                            <Route path="/Navigation" component={Navigation}/>
                            <Route path="/SignUp" component={SignUp}/>
                            <Route path="/TaskList" component={TaskList}/>
                            <Route path="/TheSwipe" component={TheSwipe}/>
                        </Switch>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
