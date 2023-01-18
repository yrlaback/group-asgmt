import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import StepOne from "./components/Steps/stepOne";
import StepTwo from "./components/Steps/stepTwo";
import StepThree from "./components/Steps/stepThree";
import StepFour from "./components/Steps/stepFour";
import StepFive from "./components/Steps/stepFive";
import StepSix from "./components/Steps/stepSix";
import StepSeven from "./components/Steps/stepSeven";
import StepNine from "./components/Steps/stepNine";
import StepEight from "./components/Steps/stepEight";
import StepTen from "./components/Steps/stepTen";
import ExitStep from "./components/Steps/exit";
import DeadStep from "./components/Steps/dead";

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
          <Route path="/adventure/step1" exact element={<StepOne />} />
          <Route path="/adventure/step2" exact element={<StepTwo />} />
          <Route path="/adventure/step3" exact element={<StepThree />} />
          <Route path="/adventure/step4" exact element={<StepFour />} />
          <Route path="/adventure/step5" exact element={<StepFive />} />
          <Route path="/adventure/step6" exact element={<StepSix />} />
          <Route path="/adventure/step7" exact element={<StepSeven />} />
          <Route path="/adventure/step8" exact element={<StepEight />} />
          <Route path="/adventure/step9" exact element={<StepNine />} />
          <Route path="/adventure/step10" exact element={<StepTen />} />
          <Route path="/adventure/exit" exact element={<ExitStep />} />
          <Route path="/adventure/dead" exact element={<DeadStep />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
