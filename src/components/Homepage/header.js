import React from 'react';
import './header.css';

const Header = () => (

        <div>
            <div>
                <div className="container-fluid tausta-1 text-center">

                </div>
                <div className="container-fluid tausta-2 text-center">
                    {/*<div className="container text-center my-auto">*/}
                        <h1>Hienoin ympäristöplatform ikinä</h1>
                        <h3>
                            <em>Täällä voit tehdä tietoisia ympäristövalintoja</em>
                        </h3><br/>
                        <a className="button-header" href="/thechoice">
                            Aloita tästä!
                        </a>
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