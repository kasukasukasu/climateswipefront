import React, { Component } from "react";
import SignedOutView from "./SignedOutView";
import { withRouter } from "react-router";
import app from "../../../base";

// luodaan uloskirjaus komponentti index failiin


class LogOutContainer extends Component {
    handleLogOut= async event => {
        app.auth()
            .signOut()
            .catch(function (err) {});
        }

        render() {
            return <SignedOutView  onSubmit={this.handleLogOut()}/>;
    }
}

export default withRouter(LogOutContainer);