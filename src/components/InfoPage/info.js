import React, {Component} from 'react';
import './info.css';


class Info extends Component {
    render() {
        return (
            <div className="info">
            <h1 className="header-header"> Ilmastonmuutos ja hiilijalanjälki</h1>
                <p className="header-text-1">Ilmastonmuutos ihmisen toiminnan seurauksena on aikamme suurimpia kriisejä. Ilmastonmuutos itsessään ei ole uusi tai ennenkuulumaton tapahtuma, mutta sen nopeus ja suuruus ovat poikkeuksellisia. Ja kaikki tämä on ihmisen edesauttamaa.</p>
                    <p className="header-text-2">Tiesitko, että suomalaisten kulutustottumuksilla tarvitsisimme 3,6 maapalloa kattamaan valintojemme luonnonvarojen tarpeen? </p>
                    <p className="header-text-3">Hiilijalanjälki on mittari, jota käytetään mittaamaan tuotteen toiminnan tai palvelun aiheuttamia kasvihuonekaasupäästöjä. Lisääntyvät kasvihuonekaasupäästöt nopeuttavat ilmastonlämpenemistä ja ovat suurin syy ilmastonmuutokseen.</p>
                    <p className="header-text-3">Jos haluamme säästää luonnonvarojamme myös tuleville sukupolville, meidän tulisi pienentää kulutuksemme muodostamaa hiilijalanjälkeä huomattavasti. Jokainen kulutustamme pienentävä teko on lahja tuleville sukupolville ja maapallon hyvinvoinnille</p>
            {/*<h1 className="header-header"> Ilmastonmuutos - Aikamme suurin maailmanlaajuinen kriisi</h1><br/>*/}
                {/*<p ><em>Ilmastonmuutos ihmisen toiminnan seurauksena on aikamme suurimpia kriisejä. Ilmastonmuutos itsessään ei ole uusi tai ennenkuulumaton tapahtuma, mutta sen nopeus ja suuruus ovat poikkeuksellisia. Ja kaikki tämä on ihmisen edesauttamaa. </em></p>*/}
            </div>
        )
    }
}

export default Info;