import * as React from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';

class Cabinet extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Cabinet</h1>
                            <h3>Вітаємо, -клієнт-</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-9">
                            <div className='col text-center'>
                                <h4>Cart</h4>
                            </div>
                            <div className='col text-center'>
                                <h4>PreOrders</h4>
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
 
export default connect()(Cabinet);