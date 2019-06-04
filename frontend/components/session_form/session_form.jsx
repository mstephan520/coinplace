import React from 'react';
import { withRouter } from 'react-router-dom';
import NavContainer from '../Nav/nav_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            demo: '',
        };
        this.demo = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state)
        if (this.state.demo) {
            user = {email: 'BuzzAldrin@apollo.11', password: 'magnificentdesolation'}
        }
        // debugger;
        this.props.processForm(user);
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

        const demoUser = () => {
            if (this.props.formType === 'Sign in') {
                return <input type="submit" value='Continue as guest' className="demoUser" onClick={this.update('demo')}/>
            }
            else {
                return null;
            }
        }

        const stateField = () => {
            let statesArr = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            let allStates = statesArr.map(state => {
                return <option className="singleState" value={state}>{state}</option>
                });

            if (this.props.formType === 'Create account') {
                return (
                    <div className="outerStatesContainer">
                        <label>State</label>
                        <div className="innerStatesContainer">
                            <select className="states" defaultValue='Select a state'>
                                {/* <option value="Choose a State">Choose a State</option> */}
                                {allStates}
                            </select>
                        </div>
                    </div>
                )
            } else {
                return null;
            }
        }

        return (
            <div>
                <NavContainer />
                <div className="signup_background">
                    <div className="mainPage">
                        <h2 className="signupHeading">{this.props.formType === 'Sign in' ? 'Sign in to Coinplace' : 'Create your account'} </h2>
                        <div className="form_container">
                            <form onSubmit={this.handleSubmit}>

                                {nameFields()}
                                <div className="credentials">
                                    <label>Email</label>
                                    <input type="text" placeholder='Your email address' value={this.state.email} onChange={this.update('email')} />

                                    <label>Password</label>
                                    <input type="password" placeholder='Choose a password' value={this.state.password} onChange={this.update('password')} />
                                    {stateField()}
                                    <input type="submit" value={this.props.formType} className="submitButton" />
                                    {demoUser()}
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default withRouter(SessionForm);