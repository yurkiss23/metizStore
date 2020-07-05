import * as React from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';

class Cart extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container>
                <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Cart</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-9">
                            <div className='col text-center'>
                                <h4>Cart</h4>
                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="col text-center">
                                <h4>news</h4>
                            </div>
                            <div className="col text-center">
                                <h4>random</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Cart);