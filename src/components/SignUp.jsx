import React, { useState } from "react";

function SignUp(props) {
    const { email, setEmail } = props;
    const { password, setPassword } = props;
    const { hasAccount, setHasAccount } = props;
    const { handleSignUp } = props;
    return (
        <div className="login">
            <div className="login__header">
                <h1>Sign Up</h1>
            </div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__fields"
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                className="login__fields"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSignUp}>
                Sign Up
            </button>

            <p>
                Already Registered?{" "}
                <button onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                </button>
            </p>
        </div>
    );
}

export default SignUp;
