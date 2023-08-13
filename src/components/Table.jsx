import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../store/features/posts/postsSlice';
import { showNotification, closeNotication } from '../store/features/notification/notificationSlice';
import { setSuccess, setError, clearType } from '../store/features/type/typeSlice';
import axios from 'axios'

const Table = () => {

  const apiUrl = process.env.REACT_APP_API_URL;
  const posts = useSelector(state => state.posts);
  const filter = useSelector(state => state.filter.value);
  const [ postList, setPostList ] = useState(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    setPostList(posts.filter(post => post.name.includes(filter)));
    return () => {
      setPostList([]);
    };
  }, [filter])

  const autoCloseNotification = () => {
    setTimeout(() => {
      dispatch(closeNotication());
      dispatch(clearType());
    }, 5000);
  }

  const removePost = async (e) => {
    const idElement = e.target.parentElement.parentElement.id;
    try {
      const response = await axios.delete(apiUrl + '/posts/' + idElement);
      const index = posts.findIndex(post => post.id === response.data.id);
      dispatch(deletePost(index));
      dispatch(setSuccess());
      dispatch(showNotification('Se ha borrado exitósamente el post'));
      autoCloseNotification();
    } catch (error) {
      dispatch(setError());
      dispatch(showNotification(error.response.data.error));
      autoCloseNotification();
      console.error(error);
    }
  };

  return (
    <>
      <table className="table is-narrow is-striped is-bordered is-fullwidth" summary="Posts">
        <thead className="has-background-light">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {
            postList.map(post =>
              <tr id={post.id} key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td><a onClick={removePost}>Eliminar</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
};

export default Table;
