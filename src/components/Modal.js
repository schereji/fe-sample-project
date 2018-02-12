import React from 'react';
import {ShoppingList} from '.';

import PropTypes from 'prop-types';

export const Modal = (props) => {
	return (
		<main className="modal fade" id="shoppingCartModal" tabIndex="-1" role="dialog" aria-labelledby="shoppingCart" aria-hidden="true">
			<section className="modal-dialog modal-dialog-centered" role="document">
				<section className="modal-content">
					<section className="modal-header">
						<p className="modal-title" id="exampleModalLabel">Your Cart</p>
					</section>
					<section className="modal-body">
						<ShoppingList cart={props.cart} removeItemFromCart={props.removeItemFromCart}/>
					</section>
					<section className="modal-footer d-flex justify-content-center">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
					</section>
				</section>
			</section>
		</main>
	);
};

Modal.propTypes = {
	cart: PropTypes.array.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
};
