import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Login from "./components/Login";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />}/>
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
