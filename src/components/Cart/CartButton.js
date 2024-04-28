import { uiAction } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartAction = useSelector(state => state.cart.totalQuantity)

  const showCartHandler = () =>
  {
    dispatch(uiAction.toggle());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAction}</span>
    </button>
  );
};

export default CartButton;
