import arrowRight from "../../icons/arrow-right.png";
import arrowLeft from "../../icons/arrow-left.png";

import "../../style/ProgressControl.css";

function ProgressControl({ step, setStep }) {
  function nextStep() {
    setStep(step < 3 ? step + 1 : step);
  }
  function prevStep() {
    setStep(step > 1 ? step - 1 : step);
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="shipping">
        <button className={step === 1 ? "prev button-hidden" : "prev"} onClick={prevStep}>
          <img src={arrowLeft} alt="" srcSet="" />
          上一步
        </button>
        <button className="next" onClick={nextStep}>
          {step < 3 ? "下一步" : "確認下單"}
          {step < 3 ? <img src={arrowRight} alt="" srcSet="" /> : ""}
        </button>
      </section>
    </section>
  );
}

export default ProgressControl;
