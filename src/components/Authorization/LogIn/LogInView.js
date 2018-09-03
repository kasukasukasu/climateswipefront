// tässä tehdään kirjautumislogiikka

import React from "react";
import {Image} from "react-bootstrap"
import ClimateChoice from "../../../ClimateChoice.png";

const LogInView = ({ onSubmit }) => {

    //   // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div className="container text-center my-auto">
            <h1>Kirjaudu  sisään</h1>
            <form onSubmit={onSubmit}>
                <p><label>Sähköposti<input style={{ width: "90%" }} name="email" type="email" placeholder="Sähköposti"/></label></p>
                <p><label>Salasana<input style={{ width: "100%" }} name="password" type="password" placeholder="Salasana"/></label></p>
                <button type="submit">Kirjaudu sisään</button>
            </form>
            <Image src={ClimateChoice} circle width="200" height="200" />
        </div>
    );
};

export default LogInView;