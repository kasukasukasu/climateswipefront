import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import TasksList from './components/TasksList';
import TheSwipe from './components/TheSwipe';


const App = appProps => (
            <Router>
                <div className="App">
                    <Navigation/>
                    <Grid>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path="/taskslist" component={TasksList}/>
                            <Route path="/theswipe" component={TheSwipe}/>
                        </Switch>
                    </Grid>
                </div>
            </Router>
        );



export default App;
