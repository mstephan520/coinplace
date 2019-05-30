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

    nameFields() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    <br/>

                    <label>First Name
                                <input
                            type="text"
                            placeholder='First Name'
                            value={this.state.first_name}
                            onChange={this.update('first_name')}/>
                    </label>
                    <br/>
                    <label>Last Name
                                <input
                            type="text"
                            placeholder='First Name'
                            value={this.state.last_name}
                            onChange={this.update('last_name')}/>
                    </label>
                </div>
            );
        }
        else {
            return null;
        }
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.formType === 'login' ? 'Sign in to Coinplace' : 'Create your account' }
                    <br/>
                    <div>
                        {this.nameFields()}
                        <br/>
                        <label>Email
                            <input 
                                type="text"
                                placeholder='Your email address'
                                value={this.state.email}
                                onChange={this.update('email')}/>
                        </label>

                        <br/>
                        <label>Password
                            <input 
                                type="password"
                                placeholder='Choose a password'
                                value={this.state.password} 
                                onChange={this.update('password')}/>
                        </label>
                        <br/>
                        <input type="submit" value={this.props.formType}/>
                    </div>
                </form>


            </div>
        )
    }
}

export default withRouter(SessionForm)