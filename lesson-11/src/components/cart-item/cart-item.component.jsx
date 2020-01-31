import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-item.styles.scss';

const CartItem = ({ item:{imageUrl, price, name, quantity}, addItem }) =>  (
  <div className='cart-item'> 
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
) ;


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(cartItem);
