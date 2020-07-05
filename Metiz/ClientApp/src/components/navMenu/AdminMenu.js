import * as React from 'react';
import './AdminMenu.css';
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AdminMenu extends React.PureComponent {
    state = { isOpen: false }
    render() { 
        return ( 
            <header>
                <Navbar className="navbar-expand-md navbar-dark navbar-toggleable-md sticky-top bg-dark p-0 shadow">
                    <NavbarBrand tag={Link}
                        className='col-md-3 col-lg-2 mr-0 px-3'>Metiz</NavbarBrand>
                    {/* <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a> */}
                    <Collapse className="d-md-inline-flex" isOpen={this.state.isOpen} navbar>
                        {/* <button className="navbar-toggler position-absolute d-md-none collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <input className="form-control form-control-dark w-100"
                            type="text"
                            placeholder="Search" aria-label="Search"></input>
                        <Nav className="navbar-nav px-3">
                            <NavItem>
                                <NavLink tag={Link}
                                    className="nav-link text-nowrap"
                                    to='/'>Sign out</NavLink>
                            </NavItem>
                            {/* <li className="nav-item text-nowrap">
                            </li> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
         );
    }
}