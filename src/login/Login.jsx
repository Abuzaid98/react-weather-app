import React, { useState } from "react";
import "./style.css";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import firbase from "../Firbase";
import Weather from "../recentCity/RecentCity";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()


    const handleLogin = () => {
        console.log("clicked");

        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
        provider.setCustomParameters({
            login_hint: "ecurezaid@gmail.com",
        });

        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate("/recentCity", { state: { username: user.displayName, email: user.email, url: user.photoURL } })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("from sign out");
            })
            .catch((error) => {
                // An error happened.
            });
    };


    return (
        <>
            <div className="logContainer">
                <h1 className="mainHeading text-center m-2">Weather App</h1>

                <div className="logInForm text-center m-auto p-3 mt-3">
                    <h2 className="mb-5">Log in to Weather App</h2>

                    <button type="submit" onClick={handleLogin} className="btn btn-primary mb-5" >
                        Log in
                    </button>

                    <p className="mb-5 fw-semibold">-------------- OR --------------</p>

                    <button type="submit" onClick={handleLogin} className="btn btn-primary mb-5">
                        Log in with Gmail
                    </button>
                </div>
            </div>

        </>
    );
};


export default Login;
