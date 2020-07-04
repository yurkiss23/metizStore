import * as React from 'react';
import {connect} from 'react-redux';
import { Container, NavLink } from 'reactstrap';
import Signup from './Signup';
import { Link } from 'react-router-dom';

class Login extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container className="jumbotron col col-md-6">
                    <form>
                        <div className="text-center mb-4">
                            <h3 className="display-4">Вітаємо!</h3>
                        </div>
                        <div className="lead">
                            <div className="form-group row">
                                <label for="inputLogin" className="col-sm-2 col-form-label">Логін</label>
                                <div className="col-sm-10">
                                    <input type="text"
                                    className="form-control form-control-lg"
                                    id="inputLogin"
                                    placeholder="логін або email"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Пароль</label>
                                <div className="col-sm-10">
                                    <input type="password"
                                    className="form-control form-control-lg"
                                    id="inputPassword"
                                    placeholder="пароль"></input>
                                </div>
                            </div>
                        </div>
                        <div className="lead">
                            <div className="form-group row justify-content-center">
                                <div className="col-sm-4 pt-3">
                                    <button type="submit"
                                    className="btn btn-success btn-lg btn-block">Увійти</button>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-sm-6 pt-3">
                                    <Link tag={Link} to='/signup'
                                        className="btn btn-outline-secondary btn-sm btn-block">
                                            Зареєструватися</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Login);