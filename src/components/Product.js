import React from 'react';
import PropTypes from 'prop-types';
import {Images} from '../paths';

export const Product = (props) => {
	let imageUrl = '';
	const localFilename = props.product.filename.slice(0, -4);
	
	if(Images && localFilename) {
		imageUrl = Images.filter((item) => item.includes(localFilename));
	}
	
	return (
		<section data-id={props.product.id} className="item flex-column col-12 col-md-6 col-lg-3 d-flex">
			<img src={imageUrl} alt={props.product.name}/>
			
			<p>{props.product.name}</p>
			<span>${props.product.price}</span>
			<a onClick ={props.addItemToCart} className="add-to-cart justify-content-center" role="button">
				Add to Cart
			</a>
		</section>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		filename: PropTypes.string.isRequired,
	}),
};
