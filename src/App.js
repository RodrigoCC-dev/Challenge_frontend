import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Filter from './components/Filter';
import Notification from './components/Notification';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from './store/features/posts/postsSlice';
import axios from 'axios';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
    return () => {
      dispatch(setList([]));
    };
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(apiUrl + '/posts');
      dispatch(setList(response.data));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App container mt-5">
      <header>
        <h2 className="title is-3">Registro de Posts</h2>
        { notification.display &&  <Notification />}
        <Filter />
      </header>
      <section className="my-5 pb-3">
        <Table />
      </section>
      <footer className="my-5">
        <Form />
      </footer>
    </div>
  );
}

export default App;
