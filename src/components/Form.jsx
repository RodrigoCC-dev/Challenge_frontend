import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <>
      <div className="field is-flex is-justify-content-space-between">
        <div className="control">
          <input className="input input-name" type="text" placeholder="Nombre" />
          <p className="help is-danger">Texto de error</p>
        </div>
        <div className="control">
          <input className="input input-desc" type="text" placeholder="Descripción" />
          <p className="help is-danger">Otro texto</p>
        </div>
        <div className="control">
          <button className="button is-info mx-2 px-6">Crear</button>
        </div>
      </div>
    </>
  )
};

export default Form;
