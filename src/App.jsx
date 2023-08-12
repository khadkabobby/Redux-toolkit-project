import { useState,useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotals} from "./store/features/cart/cartSlice";
import Modal from "./components/Modal";
import { getCartItems } from "./store/features/cart/cartApi";


function App() {
  const [loader,setLoader]=useState(true);
  const dispatch=useDispatch();
  const {cartItems,isLoading}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector((store)=>store.modal);

 
  
  useEffect(()=>{
   dispatch(getCartItems())
  },[])

  useEffect(()=>{
   dispatch(calculateTotals());
  },[cartItems])

  useEffect(()=>{
    setLoader(false);
  },[isLoading])

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      {loader?(<div className="loading">
      <h1>Loading....</h1>
    </div>):(

      <CartContainer/>
    )}
    </main>
  );
}
export default App;
