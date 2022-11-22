import { useContext } from "react";
import { CartContext } from "../../CartContext";

import arrowRight from "../../icons/arrow-right.png";
import arrowLeft from "../../icons/arrow-left.png";

import "../../style/ProgressControl.css";

function ProgressControl({ step, setStep }) {
  const shoppingForm = useContext(CartContext);

  function nextStep() {
    setStep(step < 3 ? step + 1 : step);
  }
  function prevStep() {
    setStep(step > 1 ? step - 1 : step);
  }
  function submit() {
    console.log(shoppingForm);
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="shipping">
        {step === 1 ? (
          <button className="prev button-hidden" onClick={prevStep}>
            <img src={arrowLeft} alt="" srcSet="" />
            上一步
          </button>
        ) : (
          <button className="prev" onClick={prevStep}>
            <img src={arrowLeft} alt="" srcSet="" />
            上一步
          </button>
        )}
        {step < 3 ? (
          <button className="next" onClick={nextStep}>
            下一步
            <img src={arrowRight} alt="" srcSet="" />
          </button>
        ) : (
          <button className="next" type="button" onClick={submit}>
            確認下單
          </button>
        )}
      </section>
    </section>
  );
}

export default ProgressControl;
