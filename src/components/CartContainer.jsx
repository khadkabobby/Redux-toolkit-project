import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../store/features/modal/modalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    const reloadPage = () => {
      location.reload();
    };
    return (
      <section
        className="cart"
        
      >
        <header style={{ display: "grid", placeItems: "center" }}>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button
            type="button"
            className="btn confirm-btn"
            onClick={reloadPage}
          >
            Refresh Page
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
