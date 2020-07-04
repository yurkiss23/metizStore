import * as React from 'react';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Signup extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container className='jumbotron col col-md-7'>
                    <form>
                        <div className='form-row justify-content-center'>
                            <div className="text-center mb-4">
                                <h3 className="display-4">Реєстрація</h3>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputName">Ім'я</label>
                                <input type="text"
                                    className="form-control"
                                    id='inputName'
                                    placeholder="ім'я"></input>
                            </div>
                            <div className="form-group col-md-8">
                                <label for="inputSurName">Прізвище</label>
                                <input type="text"
                                    className="form-control"
                                    id='inputSurName'
                                    placeholder="прізвище"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-7">
                                <label for="inputEmail">Email</label>
                                <input type="email"
                                    className="form-control"
                                    id="inputEmail" placeholder='email'></input>
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputPassword">Пароль</label>
                                <input type="password"
                                    className="form-control"
                                    id="inputPassword" placeholder='пароль'></input>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className="form-group col-md-10">
                                <label for="inputStreet">Вулиця</label>
                                <input type="text"
                                    className="form-control"
                                    id="inputStreet" placeholder="вулиця"></input>
                            </div>
                            <div className='form-group col-md-1'>
                                <label for='inputBuild'>Буд.</label>
                                <input type='text'
                                    className='form-control'
                                    id='inputBuild' placeholder='#'></input>
                            </div>
                            <div className='form-group col-md-1'>
                                <label for='inputApt'>Кв.</label>
                                <input type='text'
                                    className='form-control'
                                    id='inputApt' placeholder='#'></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputCity">Місто</label>
                                <input type="text"
                                    className="form-control"
                                    id="inputCity" placeholder='місто'></input>
                            </div>
                            <div className="form-group col-md-8">
                                <label for="inputState">Область</label>
                                <select id="inputState" className="form-control">
                                    <option selected>оберіть...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                            <div className='form-group row justify-content-center mt-4'>
                                <Link to='/cabinet'
                                    className="btn btn-primary col-md-4">Підтвердити</Link>
                            </div>
                    </form>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default connect()(Signup);