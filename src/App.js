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
import StepEleven from "./components/Steps/stepEleven";
import PrivateRoute from "./components/PrivateRoute";

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
          <Route path="/adventure"  
            element={
              <PrivateRoute>
                <Adventure />
              </PrivateRoute>}
          />
          <Route path="/adventure/step1" 
            element={
              <PrivateRoute>
                <StepOne />
              </PrivateRoute>} 
          />
          <Route path="/adventure/step2" 
            element={
              <PrivateRoute>
                <StepTwo />
              </PrivateRoute>}
          />
          <Route path="/adventure/step3" 
            element={
              <PrivateRoute>
                <StepThree />
              </PrivateRoute>
            } />
          <Route path="/adventure/step4" 
            element={
              <PrivateRoute>
                <StepFour />
              </PrivateRoute>
            } />
          <Route path="/adventure/step5" 
            element={
              <PrivateRoute>
                <StepFive />
              </PrivateRoute>
            } />
          <Route path="/adventure/step6" 
            element={
              <PrivateRoute>
                <StepSix />
              </PrivateRoute>
            } />
          <Route path="/adventure/step7" 
            element={
              <PrivateRoute>
                <StepSeven />
              </PrivateRoute>
            } />
          <Route path="/adventure/step8" 
            element={
              <PrivateRoute>
                <StepEight />
              </PrivateRoute>
            } />
          <Route path="/adventure/step9" 
            element={
              <PrivateRoute>
                <StepNine />
              </PrivateRoute>
            } />
          <Route path="/adventure/step10" 
            element={
              <PrivateRoute>
                <StepTen />
              </PrivateRoute>
            } />
          <Route path="/adventure/exit" 
            element={
              <PrivateRoute>
                <ExitStep />
              </PrivateRoute>
            } />
          <Route path="/adventure/dead" 
            element={
            <PrivateRoute>
              <DeadStep />
            </PrivateRoute>
          } />
          <Route path="/adventure/step11" 
            element={
              <PrivateRoute>
                <StepEleven />
              </PrivateRoute>
            } />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
