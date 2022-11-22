import iconPlus from '../icons/plus.png';
import iconMinus from '../icons/minus.png';

import '../style/Cart.css';

function CartItem({ name, img, quantity, price, items, setItems }) {
  // 修改 item 的數量
  function changeQuantity(e) {
    // 建立新陣列
    const newItems = items.map((item) => {
      if (item.name === name) {
        let updateQuantity = item.quantity;
        // if else 判斷是增加還是減少
        if (e.target.className === 'iconMinus') {
          updateQuantity = item.quantity > 0 ? item.quantity - 1 : 0;
        } else {
          updateQuantity = item.quantity + 1;
        }
        const newItem = {
          ...item,
          quantity: updateQuantity,
        };
        return newItem;
      } else {
        return item;
      }
    });
    // 用更新後的新陣列取代舊資料
    setItems(newItems);
  }

  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} alt="" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img
              className="iconMinus"
              src={iconMinus}
              alt=""
              srcSet=""
              onClick={changeQuantity}
            />
            <span className="product-count">{quantity}</span>
            <img
              className="iconPlus"
              src={iconPlus}
              alt=""
              srcSet=""
              onClick={changeQuantity}
            />
          </div>
        </div>
        <div className="price">{quantity * price}</div>
      </div>
    </div>
  );
}

function Cart({ items, setItems, shippingPrice, isNormalShipping, totalPrice, setTotalPrice }) {
  //購物車 items，以及 items 總價(不含運費)
  const cartItems = [];
  let totalItemsPrice = 0;

  // 建立 cartItem 的 JSX；計算 totalItemsPrice
  items.forEach((item) => {
    cartItems.push(
      <CartItem
        key={item.id}
        name={item.name}
        img={item.img}
        quantity={item.quantity}
        price={item.price}
        items={items}
        setItems={setItems}
      />
    );
    totalItemsPrice += item.quantity * item.price;
  });

  // 計算總價(items 總價 + 運費)，更新回 App.js 的 totalPrice state
  // 購物金額滿 500，且選擇一般貨運，則免運；否則要運費(一般貨運 200、DHL 500)
  if (totalItemsPrice >= 500 && isNormalShipping) {
    setTotalPrice(totalItemsPrice);
  } else {
    setTotalPrice(totalItemsPrice + shippingPrice);
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
            {totalItemsPrice >= 500 && isNormalShipping
              ? "免運"
              : shippingPrice}
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
