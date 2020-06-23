import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                        {/* <nav class="my-2 my-md-0 mr-md-3"> */}
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="p-2 text-dark" to="/">Головна</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} class="p-2 text-dark" to="products">Каталог</NavLink>
                                </NavItem>
                                {/* <a class="p-2 text-dark" href="#">Features</a> */}
                                {/* <a class="p-2 text-dark" href="#">Enterprise</a>
                                <a class="p-2 text-dark" href="#">Support</a>
                                <a class="p-2 text-dark" href="#">Pricing</a> */}
                            </ul>
                        {/* </nav> */}
                        </Collapse>
                        <a class="btn btn-outline-primary" href="#">Sign up</a>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
