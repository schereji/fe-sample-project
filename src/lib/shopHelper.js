export const addItem = (list, item) => [...list, item];

export const findById = (list, id) => list.find((item) => item.id === Number(id));

export const removeItem = (list, id) => {
	const removeIndex = list.findIndex(item => item.id === Number(id));
	return [
		...list.slice(0, removeIndex),
		...list.slice(removeIndex+1)
	];
};