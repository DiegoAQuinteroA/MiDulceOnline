import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Fragment } from 'react'
import Login from './pages/auth/Login'
import CrearCuenta from './pages/auth/CrearCuenta'
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />

        </Routes>
        <Routes>

          <Route path='/crear-cuenta' exact element={<CrearCuenta />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
