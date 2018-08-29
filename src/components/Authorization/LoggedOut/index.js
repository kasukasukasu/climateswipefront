import React, { Component } from "react";
import SignedOutView from "./SignedOutView";
import { withRouter } from "react-router";
import app from "../../../base";

// luodaan uloskirjaus komponentti index failiin


class LogOutContainer extends Component {

handleLogOut= async event => {
    console.log('moroo')
    const user = await app
        .auth().signOut()
        .catch(function (err) {
            // Handle errors
            console.log('ei kirjautunut ulos');
        });
}

    render() {
        return <SignedOutView onSubmit={this.handleLogOut()} />;
    }
}

export default withRouter(LogOutContainer);