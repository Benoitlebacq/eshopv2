import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../CustomButton-component';


const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-item' />
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
