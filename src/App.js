import React, { Component } from 'react';
import './App.css';
import {Header, ProductList, Modal} from './components';
import {addItem, findById, removeItem} from './lib/shopHelper';

class App extends Component {
 
	state = {
		products: [],
		cart: [],
	};

    addItemToCart = (e) => {
		const selectedElement = e.target.parentElement;
		const selectedId = selectedElement.getAttribute('data-id');
		const invalidSelection = !selectedId || findById(this.state.cart, selectedId);
		if(invalidSelection) {
		    return;
        } else {
			const itemToAdd = findById(this.state.products, selectedId);
			const updatedCartList = addItem(this.state.cart, itemToAdd);
			selectedElement.classList.add('selected');
			
			this.setState({
				cart: updatedCartList
			});
        }
    };
    
    removeItemFromCart = (e) => {
    	const selectedId = e.currentTarget.parentElement.getAttribute('data-shopping-id');
    	let activeListElement = document.querySelector(`[data-id='${selectedId}']`);
		const updatedCartList = removeItem(this.state.cart, selectedId);
		activeListElement.classList.remove('selected');
	
		this.setState({
			cart: updatedCartList
		});
	};
    
    componentDidMount() {
		const url = 'http://localhost:8080/products';
		
		fetch(url)
			.then(res => res.json())
			.then(products => this.setState({products}));
	}
    
    render() {
        return (
            <section className="shopping-page">
                <Header numberOfItems = {this.state.cart.length}/>
                <h1>Shop our featured collection</h1>
                <main className="featured-collection d-flex">
                    <ProductList
                        products={this.state.products}
                        addItemToCart = {this.addItemToCart}
                    />
                </main>
				<Modal cart={this.state.cart} removeItemFromCart={this.removeItemFromCart}/>
			</section>
        );
  	}
}

export default App;
