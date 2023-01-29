import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        console.log(1);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } id="loginForm">
                <h1>Login!</h1>

                <label>Username</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />
                
                <input type="submit" value="Login" />

            </form>
        )
    }
}

export default LoginForm;
