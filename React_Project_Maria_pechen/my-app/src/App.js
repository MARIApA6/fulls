import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='App-main'>
        <p> hello</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
