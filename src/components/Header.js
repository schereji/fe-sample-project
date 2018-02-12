import React from 'react';
import PropTypes from 'prop-types';

export const Header = (props) => {
	return (
		<header className="d-flex flex-row">
			<div className="header-content col-4 d-flex justify-content-start">
				<i className="icon fa fa-shopping-cart" aria-hidden="true"></i>
				<p>Cart.ly</p>
				<a href="#">Shop</a>
			</div>
			<div className="header-content col-8 d-flex justify-content-end">
				<button type="button" className="btn-primary" data-toggle="modal" data-target="#shoppingCartModal">
					Your Cart
				</button>
				<span>{props.numberOfItems}</span>
			</div>

		</header>
	);
};

Header.propTypes = {
	numberOfItems: PropTypes.number.isRequired,
};
