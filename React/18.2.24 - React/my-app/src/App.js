
import './App.css';
import Home from './components/Home'
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader title="App Title" />
      <Home text="This is the main area of the tool" />
      App compoent works!
    </div>
  );
}

export default App;
