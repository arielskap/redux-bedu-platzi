import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoaderRipple from './LoaderRipple';
import Fatal from './Fatal';

import * as usuariosActions from '../actions/usuariosActions';
import Tabla from './Tabla';

const Usuarios = ({ usuarios, traerTodos, cargando, error }) => {

  useEffect(() => {
    traerTodos();
  }, [traerTodos]);

  const ponerContenido = () => {
    if(cargando) {
      return <LoaderRipple />
    }

    if (error) {
      return <Fatal mensaje={ error } />;
    }

    return <Tabla />
  };

  return (
    <div>
      <h1>Usuarios</h1>
      { ponerContenido() }
    </div>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
