import "../../style/StepProgress.css";
import pgComplete from "../../icons/pg-complete.svg";

import '../../style/StepProgress.css'

function StepProgress() {
  return (
    // <!-- register-progress -->
    <section class="progress-container col col-12">
      <span class="progress-group" data-phase="address">
        <span class="progress-icon">
          <span class="text text-hidden">1</span>
          <img src={pgComplete} alt="" srcset="" />
        </span>
        <span class="progress-label">寄送地址</span>
      </span>
      <span class="progress-bar" data-order="1"></span>
      <span class="progress-group" data-phase="shipping">
        <span class="progress-icon">
          <span class="text">2</span>
          {/* <img src={pgComplete} alt="" srcset="" /> */}
        </span>
        <span class="progress-label">運送方式</span>
      </span>
      <span class="progress-bar" data-order="2"></span>
      <span class="progress-group" data-phase="credit-card">
        <span class="progress-icon">
          <span class="text">3</span>
          {/* <img src={pgComplete} alt="" srcset="" /> */}
        </span>
        <span class="progress-label">付款資訊</span>
      </span>
    </section>
  );
}

export default StepProgress;
