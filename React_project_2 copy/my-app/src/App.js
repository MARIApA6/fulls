import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
//import Card from "./components/Card";
//import productImg from './components/assets/product_1.jpg';
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes >
      </div>
      <Footer />
    </>
  )
}

/*Card title="First Product" desciption="about" productImg="./assets/product_1.jpg" />
        <Card />
        <Card />
        <Card />
        <Card />*/

export default App;
