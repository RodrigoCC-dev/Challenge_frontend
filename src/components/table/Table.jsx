import React from 'react';
import { useSelector } from 'react-redux';
import './Table.css';

const Table = () => {

  let posts = useSelector(state => state.posts);

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
          {
            posts.map(post =>
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>Eliminar</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
};

export default Table;
