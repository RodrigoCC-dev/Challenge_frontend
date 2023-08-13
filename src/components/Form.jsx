import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/features/posts/postsSlice';
import { showNotification, closeNotication } from '../store/features/notification/notificationSlice';
import { setSuccess, setError, clearType } from '../store/features/type/typeSlice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Form.css';

const Form = () => {

  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const { register, formState: {errors}, handleSubmit } = useForm();

  const autoCloseNotification = () => {
    setTimeout(() => {
      dispatch(clearType());
      dispatch(closeNotication());
    }, 5000)
  }

  const onSubmit = async (data, e) => {
    try {
      const post = {
        name: data.name,
        description: data.description
      }
      const response = await axios.post(apiUrl + '/posts', post);
      dispatch(addPost(response.data));
      dispatch(setSuccess());
      dispatch(showNotification('Se ha agregado el nuevo post exitósamente'));
      autoCloseNotification();
      e.target.reset();
    } catch (e) {
      dispatch(setError());
      dispatch(showNotification(e.response.data.error));
      autoCloseNotification();
      console.error(e.response.data.error);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-flex is-justify-content-space-between">
          <div className="control">
            <input
              className={errors.name ? 'input input-name is-danger' : 'input input-name'}
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: "No se ha ingresado el nombre"
              })}
              />
            { errors.name && <p className="help is-danger">{ errors.name.message }</p> }
          </div>
          <div className="control">
            <input
              className={ errors.description ? 'input input-desc is-danger' : 'input input-desc' }
              type="text"
              placeholder="Descripción"
              {...register("description", {
                required: "Falta agregar una descripción"
              })}
              />
            { errors.description && <p className="help is-danger">{ errors.description.message}</p> }
          </div>
          <div className="control">
            <button className="button is-info mx-2 px-6" type="submit">Crear</button>
          </div>
        </div>
      </form>
    </>
  )
};

export default Form;
