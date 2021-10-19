import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";




const Login = () => {
    const { googleSignIn } = useAuth();
    const auth = getAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className="main d-flex justify-content-center align-items-center">
            <div className="mx-5 container" style={{ height: '600px', width: '480px' }}>
                <form onSubmit={handleRegistration}>
                    <h4 className="text-dark text-center fw-bold"><i class="fas fa-user-edit text-warning"></i> <br />
                        Hi !!  User  Please {isLogin ? <strong className="text-success">Login</strong> : <strong className="text-danger"> Register </strong>}
                    </h4>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger d-flex justify-content-center align-items-center">{error}</div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <div>--------------------------- OR -----------------------</div>
                <div className="from-group d-flex justify-content-center align-items-center ">
                    <button onClick={googleSignIn} className="btn btn-primary " ><i class="fab fa-google fw-5 text-warning">  </i>  sign in</button>
                </div>
            </div>
        </div>

    );
};

export default Login;