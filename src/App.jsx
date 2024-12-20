import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/CartSlice";
import Modal from "./components/Modal.jsx";
import { getCartItems } from "./features/cart/CartSlice";

export default function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  console.log("App component rendered");

  // useEffect(() => {
  //   dispatch(calculateTotal());
  // }, [cartItems]);
  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);
  // Fetch the cart items only once when the component mounts
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  // Calculate the total only when the items are fetched successfully
  useEffect(() => {
    if (!isLoading) {
      dispatch(calculateTotal());
    }
  }, [cartItems, isLoading, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
    return (
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    );
  
}
