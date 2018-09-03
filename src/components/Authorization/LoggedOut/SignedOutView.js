// tässä uloskirjautumissivun näkymä

import React from "react";
import {Image} from "react-bootstrap"
import ClimateChoice from "../../../ClimateChoice.png";
import "./SignedOutView.css";

const SignedOutView = ({ onSubmit }) => {

    return (
        <div>
            <h1 className="containerSignedOut text-center my-auto"> Kiitos palvelumme käyttämisestä, olet nyt kirjautunut ulos!</h1>
        {/*<Image src={ClimateChoice} circle width="200" height="200" />*/}
        </div>
    );
};

export default SignedOutView;