import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as UserActions from '../../actions/UserActions'

import './authorization.scss'

class Authorization extends Component {

    componentWillMount() {
      console.log('lol');
      this.props.actions.renderLogComponent();
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.refs;
        this.props.actions.login(email.value, password.value);
    }

    render() {

        const {emailStatus, passStatus} = this.props.validation;

        return (
            <div className='login'>
                <h1>Авторизация</h1>
                <form className="form-horizontal" onSubmit={::this.handleSubmit}>
                    <div className={"form-group" + (emailStatus ? " has-error" : "")}>
                        <label className='col-lg-2 control-label' htmlFor='email'>Email</label>
                        <div className='col-lg-10'>
                            <input type='text' className="form-control" id='email' placeholder='email' ref='email'/>
                            <p className={"help-block" + (emailStatus ? "" : " none")}>{emailStatus}</p>
                        </div>
                    </div>
                    <div className={"form-group" + (passStatus ? " has-error" : "")}>
                        <label className='col-lg-2 control-label' htmlFor='password'>Password</label>
                        <div className='col-lg-10'>
                            <input type='password' className={"form-control" + (passStatus ? " has-error" : "")}
                                   id='password' placeholder='password' ref='password'/>
                            <p className={"help-block" + (passStatus ? "" : " none")}>{passStatus}</p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-default">Войти</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        validation: state.user.validation.loginForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
