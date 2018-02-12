import React from 'react';
import PropTypes from 'prop-types';
import {Images} from "../paths";

export const ShoppingListItem = (props) => {
	let imageUrl = '';
	const localFilename = props.item.filename.slice(0, -4);
	
	if(Images && localFilename) {
		imageUrl = Images.filter((item) => item.includes(localFilename));
	}
	
	return (
		<section className="shopping-item row">
			<div className="image col-5 col-sm-6">
				<img src={imageUrl} alt={props.item.name} aria-hidden="true"/>
			</div>
			<div data-shopping-id={props.item.id} className="name-and-cost col-7 col-sm-6">
				<span onClick={props.removeItemFromCart} tabIndex={0} aria-label="Remove From Cart" className="fa-layers fa-fw delete">
					<i className="fas fa-circle"></i>
					<i className="fa-inverse fas fa-times" data-fa-transform="shrink-6"></i>
				</span>
				<p>{props.item.name}</p>
				<span>${props.item.price}</span>
			</div>
		</section>
	);
};

ShoppingListItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}),
	removeItemFromCart: PropTypes.func.isRequired
};