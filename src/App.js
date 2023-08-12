import './App.css';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <div className="App container">
      <header>
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
