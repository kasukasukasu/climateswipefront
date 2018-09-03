// tässä tehdään kirjautumislogiikka

import React from "react";
import {Image} from "react-bootstrap"
import ClimateChoice from "../../../ClimateChoice.png";
import './LogInView.css';

const LogInView = ({ onSubmit }) => {

    //   // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div className="containerLogIn text-center my-auto">
            <h1 className="containerLogIn">Kirjaudu  sisään</h1>
            {/*<p><Image src={ClimateChoice} circle width="200" height="200" /></p>*/}
            <form className="containerLogIn" onSubmit={onSubmit}>
                <p ><label>Sähköposti<input style={{ width: "90%" }} name="email" type="email" placeholder="Sähköposti"/></label></p>
                <p><label>Salasana<input style={{ width: "95%" }} name="password" type="password" placeholder="Salasana"/></label></p>
                <button type="submit">Kirjaudu sisään</button>
            </form>
        </div>
    );
};

export default LogInView;