import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import clinicLogo from '../../../images/clinic.png'
const Navbar = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img src={clinicLogo} style={{ height: '40px', width: '200px' }} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-link">HOME</Link>
                            <Link to="/about" className="nav-link">ABOUT US</Link>
                            <Link to="/contacts" className="nav-link">CONTACTS</Link>
                            {user.email && <p><strong className="text-success mx-1">{user.displayName}</strong></p>

                            }
                            {user.email ?
                                <Link to="/login">
                                    <button onClick={logOut} className="btn btn-warning me-1" >SIGN OUT</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-warning me-1" >LOGIN</button>
                                </Link>
                            }
                            <br />
                            <br />
                            <br /><br />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;