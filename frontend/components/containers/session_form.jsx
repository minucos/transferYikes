import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            password: "",
        };

        this.images = [window.alamedaCove, window.yosemiteRiver, window.sunset, window.goldenFog, window.transamerica];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            })
        }
    };

    handleSubmit() {
        this.props.processForm(this.state);
    };

    loginDemo() {
        this.props.processDemo({ email: "toby@gmail.com", password: "password" });
    }

    demoLogin() {
        const demoEmail = "toby@gmail.com";
        const demoPassword = "password";

        const typer = (string, type) => () => {
            if (string.length > 0) {
                this.setState({ [type]: this.state[type] + string[0] });
                setTimeout(typer(string.slice(1), type), 50);
            }
        }
        typer(demoEmail, "email")();
        setTimeout(typer(demoPassword, "password"), 750);
        setTimeout(this.handleSubmit, 1200);
    }

    render() {
        const demoLink = () => (
            <div className="demo-link">
                or login with our <a className="session-link" onClick={this.loginDemo}>Demo User</a>
            </div>
        )

        const demoButton = () => (
            <button className="btn-demo" onClick={this.demoLogin}>
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
            <div className="session-page">
                <div className="session-left">
                    <img src={window.transamerica} alt="photo"/>
                    {/* <img src={this.images[Math.floor(Math.random() * 5)]} alt="photo"/> */}
                </div>
                <div className="session-right">
                    <div className="session-right-logo">
                        <div className="logo">⚐</div>
                        <div className="logo-text">TransferYikes</div>
                    </div>
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
                        { this.props.formType === 'signup' ?
                            <input
                                type="text"
                                value={this.state.name}
                                placeholder="Your full name"
                                onChange={this.update("name")}
                            /> :
                            null
                        }
                        <input
                            type="password"
                            value={this.state.password}
                            placeholder="Your password"
                            onChange={this.update("password")}
                        />
                        <input className="btn-submit" type="submit" value={buttonText} />
                    </form>
                    {this.props.formType === "login" ? demoButton() : demoLink() }
                </div>
            </div>
        )
    }
};

export default SessionForm;