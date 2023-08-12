import { clearCart} from "../store/features/cart/cartSlice";
import { closeModal } from "../store/features/modal/modalSlice";
import { useSelector,useDispatch } from "react-redux";
const Modal = () => {
  const dispatch=useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={()=>{
            dispatch(clearCart())
            dispatch(closeModal());
          }}>confirm</button>
        </div>
        <button type="button" className="btn clear-btn"onClick={()=>dispatch(closeModal())}>cancel</button>
      </div>
    </aside>
  );
};

export default Modal;
