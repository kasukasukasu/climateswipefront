// autentikoinnin tekeminen: yhdistetään react-app Firebase autentifikaatio moduuliin
// mikä on Googlen Firebase?
// Firebasen autentifikaatio moduuli hoitaa loginin ja kirjautumisen ja React-router hoitaa reitiyksen hallinnoinnin

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import app from "./base";
import LogIn from "./components/Authorization/LogIn";
import Navigation from './components/Navigation';
import SignUp from './components/Authorization/SignUp';
import LoggedOut from './components/Authorization/LoggedOut';
import TasksList from './components/TaskList/TasksList';
import {createUser} from "./RestFunctions";
import TheSwipe from './components/SwipeGame/TheSwipe';
import ChoicesList from './components/ChoiceList/ChoicesList';
import Info from './components/InfoPage/info.js'
import TheMap from './components/RecyclingMap/TheMap';

// import "./scss/stylish-portfolio.css";
import Header from "./components/Homepage/header";
// import AboutSection from "./components/Homepage/about";
// import FooterSection from "./components/Homepage/footer";
import Botti from "./components/Botti/Botti";
import {Grid} from "react-bootstrap";
import earth from "./resources/static/image/earth-outline-vector-clipart_10_1_50.png";
import "./App.css"
// import NewChallenge from './Sandbox/NewChallenge/NewChallenge';
// import DataSentAndMoreInfo from './Sandbox/NewChallenge/DataSentAndMoreInfo';
// import RecyclingSearch from './Sandbox/RecyclingSearch/RecyclingSearch';
// import { ReactiveBase } from '@appbaseio/reactivesearch';

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
                <div className="App">
                    <div className="top"/>
                    <Navigation state={this.state} />
                    {/*<img src={ClimateChoice} className="App-logo" alt="logo" />*/}
                            {/*<PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>*/}
                            <Route exact path="/" render={() => <Header authentication={this.state.authenticated}/>}/>
                    <Grid>
                        <Switch>
                            {/*<Route exact path="/" component={Header} />*/}
                            <Route exact path="/login" component={LogIn} />
                            <Route exact path="/info" component={Info} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/loggedout" component={LoggedOut}/>
                            <Route path="/taskslist" render={() => <TasksList />}/>
                            <Route path="/choices" render={() => <ChoicesList user={this.state.currentUser} choice={"1"} />}/>
                            <Route path="/notchosentasks" render={() => <ChoicesList user={this.state.currentUser} choice={"0"} />}/>
                            <Route path="/thechoice" render={() => <TheSwipe user={this.state.currentUser} />}/>
                            <Route path="/botti" component={Botti} />
                            <Route path="/themap" component={TheMap}/>
                            {/*<Route path="/newchallenge" component={NewChallenge} />*/}
                            {/*<Route path="/lisatietoa" component={DataSentAndMoreInfo} />*/}
                            {/*<Route path="/recyclingsearch" component={RecyclingSearch} />*/}
                        </Switch>
                    </Grid>
                    {/*<hr/>*/}
                    <div>
                    {/*<FooterSection />*/}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;