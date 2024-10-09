import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

import PropTypes from 'prop-types';

const CartItem = ({ id , img, title, price, amount }) => {
  // console.log(id, img, title, price, amount);

  console.log(title)
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt="images" className="image" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">₹{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

// PropTypes validation
CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};


export default CartItem;
