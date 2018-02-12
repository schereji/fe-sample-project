import React from 'react';
import {Product} from '.';
import PropTypes from 'prop-types';

export const ProductList = (props) => {
	
	return (
		<section className="d-flex flex-row">
			{props.products.map((item) =><Product key={item.id} product={item} addItemToCart={props.addItemToCart}/>)}
		</section>
	);
};

ProductList.proptypes = {
	products: PropTypes.array.isRequired,
};