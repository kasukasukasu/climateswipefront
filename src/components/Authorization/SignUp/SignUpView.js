// tässä luodaan rekisteröitymislogiikka sivulle


import React from "react";
import './SignUpView.css';


const SignUpView = ({ onSubmit }) => {

    // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div className="containerSignUp text-center my-auto">
            <h1>Rekisteröidy</h1>
            <form onSubmit={onSubmit}>
                <p><label>Sähköposti</label></p>
                <p><input className="input" name="email" type="email" placeholder="Sähköposti"/></p>
                <p><label>Salasana</label></p>
                <p><input className="input" name="password" type="password" placeholder="Salasana"/></p><br/>
                <button className="button-header" type="submit">Rekisteröidy</button>
            </form>
            <p className="siqnup-info">Tallennamme antamasi sähköpostiosoitteen tietokantaamme vain kirjautumista varten.</p>
            {/*<Image src={ClimateChoice} circle width="200" height="200" />*/}
        </div>

    );
};

export default SignUpView;