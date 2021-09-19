import React from "react";
import SignUp from "./SignUp";
function Login(props) {
    const { email, password } = props;
    const { setEmail, setPassword } = props;
    const { hasAccount, setHasAccount } = props;
    const { handleLogin } = props;
    return (
        <div className="login">
            <div className="login__header">
                <h1>Login</h1>
            </div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(email);
                }}
                className="login__fields"
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                className="login__fields"
                onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(password);
                }}
            />
            <button type="submit" onClick={handleLogin}>
                Login
            </button>
            <p>
                Don't have an account?{" "}
                <button
                    onClick={() => {
                        setHasAccount(!hasAccount);
                    }}
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
}

export default Login;
