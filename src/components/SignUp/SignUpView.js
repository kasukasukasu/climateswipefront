// tässä luodaan rekisteröitymislogiikka sivulle

import React from "react";

const SignUpView = ({ onSubmit }) => {

    // saadaan onSubmit handleri propsina ja liitetään se formiin, tehdään myös paikat s-postille ja salasanalle
    return (
        <div>
            <h1>Rekisteröidy</h1>
            <form onSubmit={onSubmit}>
                <label>Sähköposti<input style={{ width: "100%" }} name="email" type="email" placeholder="Sähköposti"/></label>
                <label>Salasana<input style={{ width: "100%" }} name="password" type="password" placeholder="Salasana"
                    />
                </label>
                <button type="submit">Rekisteröidy</button>
            </form>
        </div>
    );
};

export default SignUpView;