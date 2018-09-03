import React, {Component} from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';


export class Navigation extends Component {


    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">ClimateSwipe</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullLeft>
                        {/*<NavItem href="/">Etusivu</NavItem>*/}
                        <NavItem href="/theswipe">The Swipe</NavItem>
                        <NavItem href="/taskslist">Ilmastoteot</NavItem>
                        {/*<NavItem href="/theswipe">The Swipe</NavItem>*/}
                            <NavDropdown eventKey={3} title="Ympäristötyökaluja" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/botti">Kysy Botilta</MenuItem>
                                <MenuItem eventKey={3.2} href="/themap">Kierrätyspisteet</MenuItem>
                            </NavDropdown>
                    </Nav>
                    {/*<NavItem href="/choices">Valitut haasteet</NavItem>*/}

                    {this.props.state.authenticated ? (
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Omat valinnat" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/choices">Valitut haasteet</MenuItem>
                                <MenuItem eventKey={3.2} href="/notchosentasks">Hylätyt haasteet</MenuItem>
                            </NavDropdown>
                            <NavItem href="/loggedout">Kirjaudu ulos</NavItem>
                        </Nav>
                    ) : (
                        <Nav pullRight>
                            <NavItem href="/login">Sisäänkirjautuminen</NavItem>
                            <NavItem href="/signup">Rekisteröityminen</NavItem>
                        </Nav>        )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;