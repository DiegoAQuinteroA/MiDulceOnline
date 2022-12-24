import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';



const CrearCuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: "",
    });

    const { nombre, email, password, confirmar } = usuario



    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }




    const registroCuenta = async () => {

        if (password !== confirmar) {
            const msg = "Las constrasenas no coinciden"
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
        } else if (password.length < 6) {
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
                nombre: nombre,
                email: email,
                password: password,

            }
            const response = await APIInvoke.invokePOST("/api/usuarios", data);

            console.log(response)
            const mensaje = response.msg;
            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                console.log("Usuario Creado Exitosamente")
                const msg = "Usuario Creado Exitosamente";
                swal({
                    title: 'Información',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });



            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registroCuenta()
    }
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Crear</b> Cuenta</Link>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingresa tus datos y comienza a pedir los mejores dulces!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="name"
                                    className="form-control"
                                    placeholder="Name"
                                    id="name"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange} />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange} />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
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

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
                                    onChange={onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="social-auth-links text-center mb-3">
                                <button type="submit" className="btn btn-block btn-primary">Aceptar</button>
                                <Link to={"/"} className="btn btn-block btn-danger">Regresar al Login</Link>
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

export default CrearCuenta;