import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../store/features/posts/postsSlice';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {

  const dispatch = useDispatch();
  const { register, formState: {errors}, handleSubmit } = useForm();
  let postsIds = useSelector(state => state.posts).map(post => post.id);

  const generateId = () => {
    const maxId = postsIds.sort((a, b) => b - a)[0];
    return maxId + 1;
  }

  const onSubmit = (data, e) => {
    try {
      const post = {
        id: generateId(),
        name: data.name,
        description: data.description
      }
      console.log(post);
      dispatch(addPost(post));
      e.target.reset();
    } catch (e) {
      console.error(e);
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
