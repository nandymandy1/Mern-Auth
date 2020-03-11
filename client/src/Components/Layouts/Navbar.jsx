import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/Auth/Action";

const Header = ({ isAuthenticated, user, logoutUser }) => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Auth App
                    </a>
                    <button
                        type="button"
                        aria-expanded="false"
                        data-toggle="collapse"
                        className="navbar-toggler"
                        aria-label="Toggle navigation"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className="nav-link">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <span className="navbar-text mr-3">
                                            Welcome, {user.username}
                                        </span>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="nav-link">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="!#"
                                            className="nav-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                logoutUser();
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />
        </>
    );
};
Header.propsTypes = {
    logoutUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
};
const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logoutUser })(Header);