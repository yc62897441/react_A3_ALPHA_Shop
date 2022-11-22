import "./App.css";
import { useState } from "react";
import { CartContext } from "./CartContext";

import Header from "./components/header";
import StepProgress from "./components/steps/StepProgress";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Cart from "./components/Cart";
import ProgressControl from "./components/steps/ProgressControl";
import Footer from "./components/Footer";

const data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function App() {
  const [step, setStep] = useState(1);
  const [items, setItems] = useState(data);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [isNormalShipping, setIsNormalShipping] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  // 結帳清單表單資訊之物件
  const shoppingForm = {
    title: "",
    name: "",
    tel: "",
    email: "",
    county: "",
    address: "",
    shipping: "",
    creditCardOwner: "",
    creditCardNo: "",
    creditCardExpiration: "",
    creditCardCVC: "",
    totalPrice: totalPrice,
  };
  // 填寫結帳清單表單
  function inputShoppingForm(e) {
    shoppingForm[e.target.name] = e.target.value;
  }

  return (
    <div className="App">
      <body>
        <Header />
        <main className="site-main">
          <CartContext.Provider value={shoppingForm}>
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
                <Step1 step={step} inputShoppingForm={inputShoppingForm} />
                <Step2
                  step={step}
                  setShippingPrice={setShippingPrice}
                  setIsNormalShipping={setIsNormalShipping}
                  inputShoppingForm={inputShoppingForm}
                />
                <Step3 step={step} inputShoppingForm={inputShoppingForm} />
              </section>

              {/* <!-- cart --> */}
              <Cart
                items={items}
                setItems={setItems}
                shippingPrice={shippingPrice}
                isNormalShipping={isNormalShipping}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />

              {/* <!-- progress-control --> */}
              <ProgressControl step={step} setStep={setStep} />
            </div>
          </CartContext.Provider>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default App;
