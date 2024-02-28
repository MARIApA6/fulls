
import './App.css';
import Fotter from './components/Fotter';
import Home from './components/Home'
import PageHeader from './components/PageHeader';
import ProductList from './components/product/ProductList';


function App() {
  return (
    <div className="App">
      <PageHeader title="App Title" />
      {/*<Home text="This is the main area of the tool" />
      App compoent works!*/}
      <Lernning />
      <Fotter />

    </div>
  );
}

export default App;
