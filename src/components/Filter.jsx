import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <>
      <div className="field is-flex is-justify-content-space-between">
        <div className="control">
          <input className="input inp-filter" placeholder="Filtro de Nombre" />
        </div>
        <div className="control">
          <button className="button is-primary mx-2 px-6">Buscar</button>
        </div>
      </div>
    </>
  )
};

export default Filter;
