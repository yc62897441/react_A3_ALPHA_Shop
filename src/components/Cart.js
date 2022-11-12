import productImg1 from "../images/product-1.jpg";
import productImg2 from "../images/product-2.jpg";
import iconPlus from "../icons/plus.png";
import iconMinus from "../icons/minus.png";

import "../style/Cart.css";

function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <div className="cart-container-wrapper">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="{0}">
          <div
            className="product-container col col-12"
            data-count="{0}"
            data-price="{3999}"
          >
            <img className="img-container" src={productImg1} />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src={iconMinus} alt="" srcSet="" />
                  <span className="product-count">5</span>
                  <img src={iconPlus} alt="" srcSet="" />
                </div>
              </div>
              <div className="price">1500</div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count="{0}"
            data-price="{1299}"
          >
            <img className="img-container" src={productImg2} />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src={iconMinus} alt="" srcSet="" />
                  <span className="product-count">
                    <img src={iconPlus} alt="" srcSet="" />
                  </span>
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price"></div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price"></div>
        </section>
      </div>
    </section>
  );
}

export default Cart;
