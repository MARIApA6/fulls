import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {

  /*let component
  switch (window.location.pathname) {

    case "/main":
      component = <Main />
      break
    case "/SignUp":
      component = <SignUp />
      break
    case "/Login":
      component = <Login />
      break
  }*/
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


    </>
  )

}
export default App
