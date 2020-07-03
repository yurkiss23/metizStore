import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
// import {ApplicationState} from '../store';
import { Container } from 'reactstrap';

class Catalog extends React.PureComponent {
    render() { 
        return ( 
            <React.Fragment>
                <Container>
                <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Catalog</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h3>-- brands --</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col col-md-9 text-center">
                            <h4>prodOfBrands</h4>
                        </div>
                        <div className="col col-md-3 text-center">
                            <div className="col col-md-12 text-center">
                                <h4>news</h4>
                            </div>
                            <div className="col col-md-12 text-center">
                                <h4>random</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Catalog);