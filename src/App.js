import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import StepTwo from "./components/Steps/stepTwo";
import StepThree from "./components/Steps/stepThree";
import StepFour from "./components/Steps/stepFour";
import StepFive from "./components/Steps/stepFive";
import StepSix from "./components/Steps/stepSix";
import ExitStep from "./components/Steps/exit";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/welcome" exact element={<Welcome />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/adventure" exact element={<Adventure />} />
          <Route path="/adventure/step2" exact element={<StepTwo />} />
          <Route path="/adventure/step3" exact element={<StepThree />} />
          <Route path="/adventure/step4" exact element={<StepFour />} />
          <Route path="/adventure/step5" exact element={<StepFive />} />
          <Route path="/adventure/step6" exact element={<StepSix />} />
          <Route path="/adventure/exit" exact element={<ExitStep />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
