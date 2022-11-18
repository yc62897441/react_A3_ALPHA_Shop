import "./App.css";
import { useState } from "react";

import Header from "./components/header";
import StepProgress from "./components/steps/StepProgress";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Cart from "./components/Cart";
import ProgressControl from "./components/steps/ProgressControl";
import Footer from "./components/Footer";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <body>
        <Header />
        <main className="site-main">
          <div className="main-container">
            {/* <!-- register --> */}
            <section
              className="register-container col col-lg-6 col-sm-12"
              data-phase="1"
              data-total-price="0"
            >
              {/* <!-- register-title --> */}
              <h2 className="register-title col col-12">結帳</h2>
              <StepProgress step={step} />
              <Step1 step={step} />
              <Step2 step={step} />
              <Step3 step={step} />
            </section>

            {/* <!-- cart --> */}
            <Cart />

            {/* <!-- progress-control --> */}
            <ProgressControl step={step} setStep={setStep} />
          </div>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default App;
