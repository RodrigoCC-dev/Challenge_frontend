import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <>
      <table className="table is-narrow is-bordered is-fullwidth" summary="Posts">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
};
