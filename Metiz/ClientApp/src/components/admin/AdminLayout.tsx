import * as React from 'react';
import { Container } from 'reactstrap';
import AdminMenu from '../navMenu/AdminMenu';

export default (props: {children?: React.ReactNode}) => (
    <React.Fragment>
        <AdminMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
