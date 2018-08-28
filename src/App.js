// autentikoinnin tekeminen: yhdistetään react-app Firebase autentifikaatio moduuliin
// mikä on Googlen Firebase?
// Firebasen autentifikaatio moduuli hoitaa loginin ja kirjautumisen ja React-router hoitaa reitiyksen hallinnoinnin


import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import app from "./base";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import LoggedOut from './components/LoggedOut';
import TasksList from './components/TasksList';
import TheSwipe from './Sandbox/Swiping/TheSwipe';


class App extends Component {
    // tässä asetetaan alkuperäinen state
    state = { loading: true, authenticated: false, user: null };

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }


    render() {
        const { authenticated, loading } = this.state;

        // renderöinti, kun haetaan autentikaatiota näytetään viestiä sivua ladataan

        if (loading) {
            return <p>Tietoja ladataan...</p>;
        }

        // sitten renderöitään reitit
        // oteaan privateroute käyttöön, jos halutaan määritellä sivut, joille pääsee vain kirjautunut käyttäjä
        return (
            <Router>
                <div>
                    <Navigation state={this.state} />
                    {/*<PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/loggedout" component={LoggedOut}/>
                    <Route path="/taskslist" component={TasksList}/>
                    <Route path="/theswipe" component={TheSwipe}/>
                </div>
            </Router>
        );
    }
}

export default App;