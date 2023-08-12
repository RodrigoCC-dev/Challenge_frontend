import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {

  const { register, formState: {errors}, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
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
