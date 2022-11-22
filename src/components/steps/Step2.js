import "../../style/Steps.css";

function Step2({
  step,
  setShippingPrice,
  setIsNormalShipping,
  inputShoppingForm,
}) {
  function toggleShippingPrice(e) {
    if (e.target.id === "shipping-standard") {
      inputShoppingForm(e);
      setShippingPrice(200);
      setIsNormalShipping(true);
    } else if (e.target.id === "shipping-dhl") {
      inputShoppingForm(e);
      setShippingPrice(500);
      setIsNormalShipping(false);
    }
  }
  return (
    <form
      class={step === 2 ? "col col-12 step2" : "col col-12 step-hidden"}
      data-phase="shipping"
    >
      <h3 class="form-title">運送方式</h3>
      <section class="form-body col col-12">
        <label class="radio-group col col-12" data-price="0">
          <input
            id="shipping-standard"
            type="radio"
            name="shipping"
            value="normal"
            onChange={toggleShippingPrice}
          />
          <div class="radio-info">
            <div class="col col-12">
              <div class="text">標準運送</div>
              <div class="price">$200 (消費滿 $500 免運)</div>
            </div>
            <div class="period col col-12">約 3~7 個工作天</div>
          </div>
          {/* <div class="radio-box-border"></div> */}
        </label>
        <label class="radio-group col col-12" data-price="500">
          <input
            id="shipping-dhl"
            type="radio"
            name="shipping"
            value="DHL"
            onChange={toggleShippingPrice}
          />
          <div class="radio-info">
            <div class="col col-12">
              <div class="text">DHL 貨運</div>
              <div class="price">$500</div>
            </div>
            <div class="period col col-12">48 小時內送達</div>
          </div>
          {/* <div class="radio-box-border"></div> */}
        </label>
      </section>
    </form>
  );
}

export default Step2;
