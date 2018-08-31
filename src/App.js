// autentikoinnin tekeminen: yhdistetään react-app Firebase autentifikaatio moduuliin
// mikä on Googlen Firebase?
// Firebasen autentifikaatio moduuli hoitaa loginin ja kirjautumisen ja React-router hoitaa reitiyksen hallinnoinnin

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
import app from "./base";
import LogIn from "./components/Authorization/LogIn";
import Navigation from './components/Navigation';
import SignUp from './components/Authorization/SignUp';
import LoggedOut from './components/Authorization/LoggedOut';
import TasksList from './components/TaskList/TasksList';
import {createUser} from "./RestFunctions";
import TheSwipe from './components/SwipeGame/TheSwipe';
import ChoicesList from './components/ChoicesList';
import "./scss/stylish-portfolio.css";
import Header from "./components/Homepage/header";
import AboutSection from "./components/Homepage/about";
import WhoWeAre from "./components/Homepage/whoweare";
import FooterSection from "./components/Homepage/footer";
import LajitteluBotti from "./components/LajitteluBotti";
import {Grid} from "react-bootstrap";
import earth from "./earth-outline-vector-clipart_10_1_50.png";

class App extends Component {
    // tässä asetetaan alkuperäinen state
    state = { loading: true, authenticated: false, user: null };

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                var userid = user.uid;
                console.log(user.uid);
                this.setState({
                    authenticated: true,
                    currentUser: user.uid,
                    loading: false
                });
                createUser(userid)

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
        // const { authenticated, loading } = this.state;
        const { loading } = this.state;

        //renderöinti, kun haetaan autentikaatiota näytetään viestiä sivua ladataan

        if (loading) {
            return <div className="loader"><img src={earth} className="App-logo" alt="logo" /></div>;
        }

        // sitten renderöitään reitit
        // oteaan privateroute käyttöön, jos halutaan määritellä sivut, joille pääsee vain kirjautunut käyttäjä
        return (
            <Router>
                <div>
                    <Navigation state={this.state} />
                            {/*<PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>*/}
                            <Route exact path="/" component={Header} />
                            <Route exact path="/" component={AboutSection} />
                            <Route exact path="/" component={WhoWeAre} />
                    <Grid>
                        <Switch>
                            <Route exact path="/login" component={LogIn} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/loggedout" component={LoggedOut}/>
                            <Route path="/taskslist" render={() => <TasksList user={this.state.currentUser}/>}/>
                            <Route path="/choices" render={() => <ChoicesList user={this.state.currentUser} choice={"1"} />}/>
                            <Route path="/notchosentasks" render={() => <ChoicesList user={this.state.currentUser} choice={"0"} />}/>
                            <Route path="/theswipe" render={() => <TheSwipe user={this.state.currentUser} />}/>
                            <Route path="/botti" component={LajitteluBotti} />
                        </Switch>
                    </Grid>
                    <hr/>
                    <FooterSection />
                </div>
            </Router>
        );
    }
}

export default App;