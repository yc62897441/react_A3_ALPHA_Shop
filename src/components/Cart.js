import iconPlus from "../icons/plus.png";
import iconMinus from "../icons/minus.png";

import "../style/Cart.css";

function CartItem({ name, img, quantity, price }) {
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img src={iconMinus} alt="" srcSet="" />
            <span className="product-count">{quantity}</span>
            <img src={iconPlus} alt="" srcSet="" />
          </div>
        </div>
        <div className="price">{quantity * price}</div>
      </div>
    </div>
  );
}

function Cart() {
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
  const cartItems = [];
  let totalItemsPrice = 0;
  let shippingPrice = 100;
  let totalPrice = 0;

  // 建立 cartItem 的 JSX；計算 totalItemsPrice
  data.forEach((item) => {
    cartItems.push(
      <CartItem
        key={item.id}
        name={item.name}
        img={item.img}
        quantity={item.quantity}
        price={item.price}
      />
    );
    totalItemsPrice += item.quantity * item.price;
  });

  // 計算總價
  if (totalItemsPrice >= 500) {
    totalPrice = totalItemsPrice;
  } else {
    totalPrice = totalItemsPrice + shippingPrice;
  }

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <div className="cart-container-wrapper">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="{0}">
          {cartItems}
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">
            {totalItemsPrice >= 500 ? "免運" : shippingPrice}
          </div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">{totalPrice}</div>
        </section>
      </div>
    </section>
  );
}

export default Cart;
