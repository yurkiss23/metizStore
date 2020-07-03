import * as React from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';

class Login extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container>
                    <div className="row justify-content-center">
                        <form className="jumbotron col col-md-6">
                            <div className="text-center">
                                <h3 className="display-4">Вітаємо!</h3>
                            </div>
                            <div className="lead">
                                <div className="form-group row">
                                    <label for="inputLogin" className="col-sm-2 col-form-label">Логін</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                        className="form-control"
                                        id="inputLogin"
                                        placeholder="логін або email"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Пароль</label>
                                    <div className="col-sm-10">
                                        <input type="password"
                                        className="form-control"
                                        id="inputPassword"
                                        placeholder="пароль"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="lead">
                                <div class="form-group row justify-content-center">
                                    <div class="col-sm-4 pt-3">
                                        <button type="submit" class="btn btn-primary btn-lg btn-block">Увійти</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Login);