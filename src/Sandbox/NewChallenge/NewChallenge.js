import React, {Component} from 'react';
import {} from 'react-bootstrap';
import '../../App.css';


class NewChallenge extends Component {

    render() {
        return (
            <form>
                <div className="container text-center my-auto">
                    <h1 className="container text-center my-auto">Uusi ehdotus</h1>
                    <p><label>Otsikko<input style={{width: "100%"}} name="title" type="title" placeholder="Otsikko"/></label></p>
                    <p><input type="text" placeholder="Kerro tähän uusi ehdotus" style={{width: "100%", height: 100}}></input></p>
                    <p><a className="btn btn-primary btn-xl js-scroll-trigger" type="submit" href="/lisatietoa">Lähetä uusi ehdotus ylläpidolle</a></p>
                </div>
            </form>
        );
    }
}

export default NewChallenge;