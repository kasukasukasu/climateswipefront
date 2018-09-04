import React from 'react';
import './header.css';

const Header = (props) => (

        <div>
            <div>
                <div className="container-fluid tausta-1">

                </div>
                <div className="container-fluid tausta-2">
                    {/*<div className="container text-center my-auto">*/}
                        <h1 className="header-header">Climate Choice</h1>
                    <h3> Apunasi kestävämpään arkeen</h3><br/>
                        <p className="header-text">
                            <em>Suomalaisten kulutustottumuksilla tarvitsisimme 3,4 maapalloa kattamaan valintojemme luonnonvarojen tarpeen. Jos haluamme säästää luonnonvarojamme myös tuleville sukupolville, meidän tulisi pienentää kulutuksemme muodostamaa hiilijalanjälkeä huomattavasti. Jokainen kulutustamme pienentävä teko on lahja tuleville sukupolville ja maapallon hyvinvoinnille</em>
                        </p><br/>
                    <p className="header-text">Climate Choice auttaa sinua tekemään kestävämpiä ympäristövalintoja ja arvioi tekemisien valintojesi vaikutusta hiilijalanjälkeesi.</p>
                    <br/><br/>
                    <div>
                    <a className="button-header" href="/info">Lue lisää hiilijalanjäljestä ja kestävistä valinnoista</a>
                    </div>
                        <br/><br/>
                    <div>
                        <a className="button-header" href="/thechoice">
                            Aloita valintojen tekeminen tästä!
                        </a>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
            <div className="container-fluid tausta-2 text-center">
            <footer className="footer text-center">
                <div className="container">
                    <p className="text-muted small mb-0">
                        Copyright &copy; Team ClimateChoice 2018
                        {/*<Image src={ClimateChoice} circle width="10" height="10" />*/}
                    </p>
                </div>
            </footer>
            </div>
        </div>


);


export default Header;