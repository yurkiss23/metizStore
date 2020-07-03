import * as React from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';
 
class Home extends React.PureComponent {
    state = { isOpen: false };
    render() { 
        return ( 
            <React.Fragment>
                <Container>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Home</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h3>-- slider --</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h4>news</h4>
                        </div>
                        <div className="col col-md-6 text-center">
                            <h4>recent</h4>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Home);