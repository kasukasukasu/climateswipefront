// tässä luodaan rekisteröitymislogiikka sivulle


import React from "react";
import './SignUpView.css';


const SignUpView = ({ onSubmit }) => {

    // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div className="containerSignUp text-center my-auto">
            <h1>Rekisteröidy</h1>
            <form onSubmit={onSubmit}>
                <p><label>Sähköposti<input style={{ width: "100%" }} name="email" type="email" placeholder="Sähköposti"/></label></p>
                <p><label>Salasana<input style={{ width: "100%" }} name="password" type="password" placeholder="Salasana"/></label></p>
                <button className="button-header" type="submit">Rekisteröidy</button>
            </form>
            <p className="siqnup-info">Tallennamme antamasi sähköpostiosoitteen tietokantaamme vain kirjautumista varten.</p>
            {/*<Image src={ClimateChoice} circle width="200" height="200" />*/}
        </div>
    );
};

export default SignUpView;