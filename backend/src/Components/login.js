import React, { Component } from 'react';
import "./login.css";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';


export class Login extends Component {
    state = {
        action: "Signup",
        loggedIn: false
    };
    handleLoginClick = () => {
        this.setState({ action: "Login", loggedIn: true });
        // Handle login logic here
    };

    handleSignupClick = () => {
        this.setState({ action: "Signup" });
        // Handle signup logic here
    };
    
    render() {
        const { action } = this.state;

        return (
            <div className='container'>
                <div className="header">
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>

                <div className='inputs'>
                    {action === "Signup" &&
                        <div className='input'>
                            <img src={user_icon} alt="User icon" />
                            <input type="text" placeholder="Username" />
                        </div>
                    }
                    <div className='input'>
                        <img src={email_icon} alt="Email icon" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className='input'>
                        <img src={pass_icon} alt="Password icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

                <div className="submit-stuff">
                    <div className={action === "Signup" ? "submit gray" : "submit"} onClick={this.handleSignupClick}>Signup</div>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={this.handleLoginClick}>Login</div>
                </div>

                {action === "Signup" ?
                    <div className="forgot-pass"><span>Forgot Password?</span></div> :
                    <div></div>
                }
            </div>
        );
    }
}

