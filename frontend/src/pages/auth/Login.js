import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert'
const Login = () => {
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''

    })

    const { email, password } = usuario

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const iniciarSesion = async () => {

        if (password.length < 6) {
            const msg = "La contrasena debe ser igual o mayor a 6 caracteres"
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                button: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })
        } else {
            const data = {
                email: email,
                password: password,

            }
            const response = await APIInvoke.invokePOST("/api/auth", data);
            console.log(response)

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        iniciarSesion()
    }
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Iniciar</b> Sesion</Link>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Inicia sesion y pide los mejores dulces!</p>
                        <form onSubmit={handleSubmit} >
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email"
                                    id="email"
                                    name="email"

                                    value={email}
                                    onChange={onChange}
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password"
                                    id="password"
                                    name="password"

                                    value={password}
                                    onChange={onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button type="submit" className="btn btn-block btn-primary">Ingresar</button>
                                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">Crear Cuenta</Link>
                            </div>
                        </form>

                        {/* /.social-auth-links */}

                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
        </div>
    );
}

export default Login;