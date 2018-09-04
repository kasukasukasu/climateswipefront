import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    render() {
        return(
            <div>
                <div>
                    <div className="container-fluid tausta-1">

                    </div>
                    <div className="container-fluid tausta-2">
                        {/*<div className="container text-center my-auto">*/}
                            <h1 className="header-header">Climate Choice</h1>
                        <h3> Apunasi kestävämpään arkeen</h3><br/>
                            <p className="header-text">
                                <em>Suomalaisten kulutustottumuksilla tarvitsisimme 3,6 maapalloa kattamaan valintojemme luonnonvarojen tarpeen. Jos haluamme säästää luonnonvarojamme myös tuleville sukupolville, meidän tulisi pienentää kulutuksemme muodostamaa hiilijalanjälkeä huomattavasti. Jokainen kulutustamme pienentävä teko on lahja tuleville sukupolville ja maapallon hyvinvoinnille</em>
                            </p><br/>
                        <p className="header-text">Climate Choice auttaa sinua tekemään kestävämpiä ympäristövalintoja ja arvioi tekemisien valintojesi vaikutusta hiilijalanjälkeesi.</p>
                        <br/><br/>
                       <HeaderButtons authentication={this.props.authentication}/>
                        {/*</div>*/}
                    </div>
                </div>
                <div className="container-fluid tausta-2">
                <footer className="footer">
                    {/*<div className="container">*/}
                        <p className="text-muted small mb-0">
                            Copyright &copy; Team ClimateChoice 2018
                            {/*<Image src={ClimateChoice} circle width="10" height="10" />*/}
                        </p>
                    {/*</div>*/}
                </footer>
                </div>
            </div>


        );
    }
}

class HeaderButtons extends Component {
    render() {
        console.log(this.props.authentication);
        if(this.props.authentication === true) {
            return (
                <div className="start-buttons">
                    <div className="read-more">
                    <a className="read-info-link" href="/info">Lue lisää hiilijalanjäljestä ja kestävistä valinnoista</a>
                    </div>
                    <div className="game">
                    <a className="button-header" href="/thechoice">Aloita valintojen tekeminen tästä!</a>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="start-buttons">
                <div className="read-more">
                    <a className="read-info-link" href="/info">Lue lisää hiilijalanjäljestä ja kestävistä valinnoista</a>
                </div>
                <div className="game">
                <a className="button-header" href="/login">Kirjaudu tästä sisään</a>
                </div>
            </div>
            )
        }
    }
}


export default Header;