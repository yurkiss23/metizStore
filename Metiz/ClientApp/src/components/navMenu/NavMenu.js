import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../NavMenu.css';

export default class NavMenu extends React.PureComponent {
    state = {
        isOpen: false
    };

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                    <Container>
                        <NavbarBrand tag={Link} to="/">Metiz</NavbarBrand>
                        {/* <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5> */}
                        <Collapse className="d-sm-inline-flex" isOpen={this.state.isOpen} navbar>
                            <div className="input-group p-1">
                                <input type="text"
                                    className="form-control form-control-sm"
                                    aria-label="пошук"
                                    aria-describedby="button-search"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary btn-sm"
                                        type="button"
                                        id="button-search">
                                        <span className="fa fa-search"
                                            aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        {/* <nav class="my-2 my-md-0 mr-md-3"> */}
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link}
                                        className="p-2 text-dark"
                                        to="/">Головна</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link}
                                        className="p-2 text-dark"
                                        to="/catalog">Каталог</NavLink>
                                </NavItem>
                                {/* <a class="p-2 text-dark" href="#">Features</a> */}
                                {/* <a class="p-2 text-dark" href="#">Enterprise</a>
                                <a class="p-2 text-dark" href="#">Support</a>
                                <a class="p-2 text-dark" href="#">Pricing</a> */}
                                <NavItem>
                                    <NavLink tag={Link}
                                        className='btn btn-outline-primary p-2'
                                        to='/login'>Увійти</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className='btn p-2'
                                        to='/cart'>
                                            <span className="fa fa-shopping-basket"
                                                aria-hidden="true"></span>
                                    </NavLink>
                                </NavItem>
                            </ul>
                        {/* </nav> */}
                        </Collapse>
                        {/* <a className="btn btn-outline-primary" href="#">Sign up</a> */}
                    </Container>
                </Navbar>
            </header>
        );
    }
}
