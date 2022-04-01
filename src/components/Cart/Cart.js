import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional rendering options
    // 1. element variable
    // 2. ternary operator   condition ? true : false
    // 3. && operator (shorthand)
    // 4. || operator
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Ohh Kipta, khoroch kor</h5>
            <p>Kinos na ken</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name} <button onClick={() => handleRemoveFromCart(tShirt)}>X</button></p>)
            }


            {/* conditional rendering options */}
            {cart.length === 0 || <p className='orange'>YAY, You are buying</p>}

            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3 jon k ki gift diba </p>
            </div>}

            {cart.length !== 4 ? <p>keep adding</p> : <button>clear all</button>}

            {command}
        </div>
    );
};

export default Cart;