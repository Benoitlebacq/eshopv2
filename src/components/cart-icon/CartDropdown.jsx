import React from 'react'
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss'
import CustomButton from '../CustomButton-component';

import CartItem from '../CartItem';


const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart : {cartItems}})=> ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)
