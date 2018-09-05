import React, { Component } from "react";
import LogInView from "./LogInView";
import { withRouter } from "react-router";
import app from "../../../base";

// luodaan kirjautumisscontainer komponentti index failiin
class LogInContainer extends Component {

    // handleSignup funktio määritelty nuolifunktioksi, tehtiin tässä, jotta ei tarvitse käyttää bind(this)
    // Tässä funktiossa preventDefault jotta vältetään sivun reloadaamista
    // haetaan salasana ja sähköposti formielementiltä
    // luodaan uusi käyttäjä firebaseen käyttäen  signInWithEmailAndPassword funktiota

    handleLogIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        app.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(auth => {
                this.props.history.push("/")
            })
            .catch(err => { alert(err); })

    };

    render() {
        return <LogInView onSubmit={this.handleLogIn} />;
    }
}

export default withRouter(LogInContainer);