import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { useSelector } from 'react-redux';

function App() {
  const notification = useSelector(state => state.notification);

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
