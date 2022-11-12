import "./App.css";

import Header from "./components/header";
import StepProgress from "./components/steps/StepProgress";
import Step1 from "./components/steps/Step1";
import Cart from "./components/Cart";
import ProgressControl from "./components/steps/ProgressControl";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <main class="site-main">
          <div class="main-container">
            {/* <!-- register --> */}
            <section
              class="register-container col col-lg-6 col-sm-12"
              data-phase="1"
              data-total-price="0"
            >
              {/* <!-- register-title --> */}
              <h2 class="register-title col col-12">結帳</h2>
              <StepProgress />
              <Step1 />
            </section>

            {/* <!-- cart --> */}
            <Cart className="cart-container" />

            {/* <!-- progress-control --> */}
            <ProgressControl />
          </div>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default App;
