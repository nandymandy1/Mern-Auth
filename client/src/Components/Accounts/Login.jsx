import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../Utils/Spinner";
import React, { useState, useEffect } from "react";
import { loginUser } from "../../store/Auth/Action";

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    let { loginUser, isAuthenticated, isLoading, token } = props;

    const onChange = e =>
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    let { username, password } = user;

    const onSubmit = e => {
        e.preventDefault();
        if (!username && !password) {
            // eslint-disable-next-line
            Toast.fire({
                icon: "info",
                title: "Username and Password is required."
            });
        } else {
            loginUser(user);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/dashboard");
        }
    }, [isAuthenticated, props.history]);

    return !token && !isAuthenticated ?
        (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center display-4 text-primary">Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={onChange}
                                placeholder="Username"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-primary" disabled={isLoading}>
                                {
                                    isLoading ? (
                                        <Spinner colorClass="text-light" size="spinner-border-sm" />
                                    ) : (
                                            "Login"
                                        )
                                }
                            </button>
                        </div>
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        ) : token && !isAuthenticated ? (
            <div style={{
                height: '84vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Spinner colorClass="text-primary" size="spinner-border-lg" />
            </div>
        ) : <Redirect to="/" />
};

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    token: state.auth.token,
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser })(Login);