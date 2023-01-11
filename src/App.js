import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" exact element={<Signup />}/>
          <Route path="/welcome" exact element={<Welcome />} />
          <Route path="/login" exact element={<Login />}/>
          <Route path="/adventure" exact element={<Adventure/>}/>
        </Routes> 
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
