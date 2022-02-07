import React from 'react';
import {Icon} from 'semantic-ui-react';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <Icon name='cart' size='large' />   
        </div>
    )
}

export default CartWidget;
