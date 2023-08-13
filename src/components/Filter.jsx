import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/features/filter/filterSlice';
import './Filter.css';

const Filter = () => {
  const posts = useSelector(state => state.posts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const namePost = posts.map(post => post.name);
  const [ data, setData ] = useState('');
  const [ nameList, setNameList ] = useState(namePost.filter(name => name.includes(filter.value)));

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
    setNameList(namePost.filter(name => name.includes(data)))
  }

  const choiceFilter = (e) => {
    const anchorElement = e.target;
    let inputElement = e.target.parentElement.parentElement.parentElement.firstChild.firstChild;
    inputElement.value = anchorElement.innerHTML;
    setData(anchorElement.innerHTML);
  }

  const changeFilter = (e) => {
    let inputElement = e.target.parentElement.parentElement.firstChild.firstChild.firstChild;
    inputElement.value = ''
    dispatch(setFilter(data));
  }

  const eraseFilter = () => {
    dispatch(setFilter(''));
    setData('');
  }

  return (
    <>
      <div className="field is-flex is-justify-content-space-between">
        <div className="dropdown-new">
          <div className="control">
            <input className="input inp-filter" placeholder="Filtro de Nombre" onChange={handleInputChange}/>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              {
                nameList.map((name, index) =>
                  <a className="dropdown-item" key={index} onClick={choiceFilter}>{ name }</a>
                )
              }
            </div>
          </div>
        </div>
        { filter.value.length > 0 &&
          <div className="control">
            <button className="button is-rounded is-link is-small is-outlined" onClick={eraseFilter}>Quitar filtro { filter.value }</button>
          </div>
        }
        <div className="control">
          <button className="button is-primary mx-2 px-6" onClick={changeFilter}>Buscar</button>
        </div>
      </div>
    </>
  )
};

export default Filter;
