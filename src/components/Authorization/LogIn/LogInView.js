// tässä tehdään kirjautumislogiikka
import React from "react";
import './LogInView.css';

const LogInView = ({ onSubmit }) => {
    // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div className="containerLogIn text-center my-auto">
            <h1 className="containerLogIn">Kirjaudu  sisään</h1>
            {/*<p><Image src={ClimateChoice} circle width="200" height="200" /></p>*/}
            <form className="containerLogIn" onSubmit={onSubmit}>
                <p><label>Sähköposti</label></p>
                <p><input className="input" name="email" type="email" placeholder="Sähköposti"/></p>
                    <p><label>Salasana</label></p>
                <p><input className="input" name="password" type="password" placeholder="Salasana"/></p><br/>
                <button className="button-header" type="submit">Kirjaudu sisään</button>
            </form>
            <div className="gotosignup"><p>Etkö ole vielä rekisteröitynyt?</p>
                <a className="signuplink" href="/signup">Rekisteröidy tästä!</a></div>
        </div>
    );
};

export default LogInView;