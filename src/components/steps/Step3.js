import "../../style/Steps.css";

function Step3({ step, inputShoppingForm }) {
  return (
    <form
      class={step === 3 ? "col col-12 step3" : "col col-12 step-hidden"}
      data-phase="credit-card"
    >
      <h3 class="form-title">付款資訊</h3>
      <section class="form-body col col-12">
        <div class="col col-12">
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div class="input-label">持卡人姓名</div>
            <input
              type="text"
              name="creditCardOwner"
              placeholder="John Doe"
              onChange={inputShoppingForm}
            />
          </div>
        </div>
        <div class="col col-12">
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div class="input-label">卡號</div>
            <input
              type="text"
              name="creditCardNo"
              placeholder="1111 2222 3333 4444"
              onChange={inputShoppingForm}
            />
          </div>
        </div>
        <div class="col col-12">
          <div class="input-group input-w-lg-3 input-w-sm-s2">
            <div class="input-label">有效期限</div>
            <input
              type="text"
              name="creditCardExpiration"
              placeholder="MM/YY"
              onChange={inputShoppingForm}
            />
          </div>
          <div class="input-group input-w-lg-3 input-w-sm-s2">
            <div class="input-label">CVC / CCV</div>
            <input
              type="text"
              name="creditCardCVC"
              placeholder="123"
              onChange={inputShoppingForm}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default Step3;
