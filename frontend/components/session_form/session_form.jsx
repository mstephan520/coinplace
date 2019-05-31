import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.processForm(this.state);
    }
 
    render() {
        const nameFields = () => {
            if (this.props.formType === 'Create account') {
                return (
                    <div className="signup_name">
                        <div className="signupFirstName">
                            <label>First name</label>
                            <input type="text" placeholder='First name' value={this.state.first_name} onChange={this.update('first_name')} />
                        </div>
                        
                        <div>
                            <label>Last name</label>
                            <input type="text" placeholder='Last name' value={this.state.last_name} onChange={this.update('last_name')} />
                        </div>
                        
                    </div>
                );
            }
            else {
                return null;
            }
        }

        return (
            <div className="signup_background">
                <div className="mainPage">
                    <h2 className="signupHeading">{this.props.formType === 'Sign in' ? 'Sign in to Coinplace' : 'Create your account'} </h2>
                    <div className="form_container">
                        <form onSubmit={this.handleSubmit}>

                            {nameFields()}
                            <div className="credentials">
                                <label>Email</label>
                                <input type="text" placeholder='Your email address' value={this.state.email} onChange={this.update('email')}/>

                                <label>Password</label>
                                <input type="password" placeholder='Choose a password' value={this.state.password} onChange={this.update('password')}/>
                                <input type="submit" value={this.props.formType} className="submitButton"/>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);