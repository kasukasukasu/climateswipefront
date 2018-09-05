import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../../../base";


// luodaan rekisteröitymiscontainer komponentti index failiin

class SignUpContainer extends Component {

    // handleSignup funktio määritelty nuolifunktioksi, tehtiin tässä, jotta ei tarvitse käyttää bind(this)
    // Tässä funktiossa preventDefault jotta vältetään sivun reloadaamista
    // haetaan salasana ja sähköposti formielementiltä
    // luodaan uusi käyttäjä firebaseen käyttäen  createUserWithEmailAndPassword funktiota

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        app.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(auth => {
                    this.props.history.push("/")
                })
            .catch(err => { alert(err); })

            };

    render() {
        return <SignUpView onSubmit={this.handleSignUp} />;
    }
}

export default withRouter(SignUpContainer);