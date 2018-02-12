import {addItem, findById, removeItem} from './shopHelper';

test('it adds item to cart array', () => {
	const originalCart = [
		{
			price: 30,
			name: 'shoes'
		},
		{
			price: 10,
			name: 'belt'
		}
	];
	const newItem = {price: 20, name: 'glasses'};
	const expectedResults = [
		{
			price: 30,
			name: 'shoes'
		},
		{
			price: 10,
			name: 'belt'
		},
		{
			price: 20,
			name: 'glasses'
		}
	];
	const newCart = addItem(originalCart, newItem);
	expect(newCart).toEqual(expectedResults);
	expect(newCart.length).toEqual(3);
});

test('it returns item with matching id', () => {
	const originalCart = [
		{
			id: 8,
			price: 30,
			name: 'shoes'
		},
		{
			id: 13,
			price: 10,
			name: 'belt'
		},
		{
			id: 20,
			price: 20,
			name: 'brush'
		},
		{
			id: 7,
			price: 15,
			name: 'slippers'
		}
	];
	const matchingItem = findById(originalCart, 20);
	expect(matchingItem).toEqual({
		id: 20,
		price: 20,
		name: 'brush'
	});
});

test('it removes items from cart', () => {
	const originalCart = [
		{
			id: 8,
			price: 30,
			name: 'shoes'
		},
		{
			id: 13,
			price: 10,
			name: 'belt'
		},
		{
			id: 20,
			price: 20,
			name: 'brush'
		},
		{
			id: 7,
			price: 15,
			name: 'slippers'
		}
	];
	
	expect(originalCart.length).toEqual(4);
	const modifiedCart= removeItem(originalCart, 20);
	expect(modifiedCart.length).toEqual(3);
	expect(modifiedCart).toEqual([
		{
			id: 8,
			price: 30,
			name: 'shoes'
		},
		{
			id: 13,
			price: 10,
			name: 'belt'
		},
		{
			id: 7,
			price: 15,
			name: 'slippers'
		}
	]);
	
});