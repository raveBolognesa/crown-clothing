import React from 'react'; 
 
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'; 

const CartDropdown = ({ title, items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
    	<CartItem/>
    </div>
	<CustomButton >Go to checkout</CustomButton> 
  </div>
);

const mapStateToProps = ()=>();

export default CartDropdown;
