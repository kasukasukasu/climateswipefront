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

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
              app.auth().signInWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    render() {
        return <LogInView onSubmit={this.handleSignUp} />;
    }
}

export default withRouter(LogInContainer);