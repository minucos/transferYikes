import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            })
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state)
    };

    loginDemo() {
        this.props.processDemo({email: "test@email.com", password: "password"});
    }

    render() {
        const demoLink = () => (
            <div className="demo_link">
                or login with our <a className="session-link" onClick={this.loginDemo}>Demo User</a>
            </div>
        )

        const demoButton = () => (
            <button className="demo-btn" onClick={this.loginDemo}>
                Sign in with Demo User
            </button>
        )

        let heading = "Welcome to money without borders.";
        let message = "Already signed up?"
        let linkText = "Log in";
        let linkUrl = "/login";
        let buttonText = "Sign up";

        if (this.props.formType === "login") {
            heading = "Welcome back.";
            message = "New to TransferYikes?"
            linkText = "Sign up";
            linkUrl = "/signup";
            buttonText = "Log in";
        }
        
        return (
            <div className="session-form">
                <h2 className="session-heading">
                    {heading}
                </h2>
                <div className="session-text">
                    {message} <Link className="session-link" to={linkUrl}>{linkText}</Link>
                </div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Your email address"
                        onChange={this.update("email")}
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder="Your password"
                        onChange={this.update("password")}
                    />
                    <input id="submit-btn" type="submit" value={buttonText} />
                </form>
                {this.props.formType === "login" ? demoButton() : demoLink() }
            </div>
        )
    }
};

export default SessionForm;