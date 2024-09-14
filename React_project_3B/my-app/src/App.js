import Navbar from "./components/Navbar";
import Login from "./pages/LoginOLD";
import Main from "./pages/Main";
//import { Route, Routes ,Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path="SignUp" element={<SignUpForm />} />
        </Routes >
      </div>
      <Footer />
    </>
  )
}

/*
<Route path="Login" element={<Login />} />


<Route path="SignUp" element={<SignUp />
Card title="First Product" desciption="about" productImg="./assets/product_1.jpg" />
        <Card />
        <Card />
        <Card />
        <Card />*/

export default App;
