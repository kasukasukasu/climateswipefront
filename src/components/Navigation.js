import React, {Component} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
                <Navbar.Collapse>{this.props.state.authenticated ? (<Nav>
                    <NavItem href="/theswipe">The Swipe</NavItem>
                    <NavItem href="/map">Jokukartta</NavItem>
                    <NavItem href="/botti">LajitteluBotti</NavItem>
                    <NavItem href="/choices">Valitut haasteet</NavItem>
                    <NavItem href="/loggedout">Kirjaudu ulos</NavItem>
                    </Nav>) : (
                    <Nav pullRight>
                        <NavItem href="/taskslist">Ilmastoteot</NavItem>
                        <NavItem href="/login">Sisäänkirjautuminen</NavItem>
                        <NavItem href="/signup">Rekisteröityminen</NavItem>

                    </Nav>        )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;