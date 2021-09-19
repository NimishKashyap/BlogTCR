import React, { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import firebaseApp from "../utils/firebase";
import Login from "./Login";
import "./css/auth.css";
import SignUp from "./SignUp";
import { createContext } from "react";

export const authContext = createContext();

function Auth({ history }) {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };
    const clearErrors = () => {
        setError("");
    };

    const handleLogin = () => {
        console.log("Handle login called!");
        clearErrors();
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(user);
                alert("Success");
                history.push("/");
            })
            .catch((err) => {
                setError(err.message);
                alert(error);
            });
    };
    const handleSignUp = () => {
        console.log("Handle Signup Called!");
        clearErrors();
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => alert("Success signup!!"))
            .catch((err) => {
                setError(err.message);
                alert(error);
            });
    };
    const handleLogOut = () => {
        firebaseApp.auth().signOut();
    };
    const authListener = () => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser(null);
            }
        });
    };

    useEffect(() => {
        authListener();
        console.log(location.pathname);
    }, []);
    // useEffect(() => {
    //     userGlobal = user;
    // }, [user]);

    return (
        <>
            <Login
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleLogin={handleLogin}
            />

            <SignUp
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleSignUp={handleSignUp}
            />
        </>
    );
}
export default Auth;
