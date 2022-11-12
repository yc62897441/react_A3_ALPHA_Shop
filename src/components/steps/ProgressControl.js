import arrowRight from "../../icons/arrow-right.png";
import arrowLeft from "../../icons/arrow-left.png";

import '../../style/ProgressControl.css'

function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {/* <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <img src={arrowRight} alt="" srcSet="" />
        </button>
      </section> */}
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <img src={arrowLeft} alt="" srcSet="" />
          上一步
        </button>
        <button className="next">
          下一步
          <img src={arrowRight} alt="" srcSet="" />
        </button>
      </section>
      {/* <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <img src={arrowLeft} alt="" srcSet="" />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section> */}
    </section>
  );
}

export default ProgressControl;
