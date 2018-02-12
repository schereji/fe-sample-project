import React from 'react';
import {ShoppingListItem} from '.';

import PropTypes from 'prop-types';

export const ShoppingList = (props) => {
	
	if(props.cart.length === 0) {
		return (
			<section className="item-list d-flex flex-row">
				<div className="col-12">
					<p>Nothing in your cart,</p>
					<p>Start Shopping</p>
				</div>
			</section>
		);
	} else {
		const total = props.cart.map(item => item.price).reduce((acc, curr) => acc + curr);
		return (
			<section className="total-cost row">
				{props.cart.map((item) => <ShoppingListItem key={item.id} item={item} removeItemFromCart={props.removeItemFromCart}/>)}
				<span className="line"></span>
				<div className="col-6 total-text">Total</div>
				<div className="col-6 total-number">${total}</div>
			</section>
		);
	}
};

ShoppingList.propTypes = {
	cart: PropTypes.array.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
};
