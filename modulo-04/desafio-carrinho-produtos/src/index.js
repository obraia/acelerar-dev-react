const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getProductsById(ids, productsList) {
	let products = Array();

	ids.forEach(id => {
		let product = productsList.find(prod => prod.id == id);
		if (product) products.push({ ...product });
	});

	return products;
}

function getPromotionName(productsList) {
	const categories = Array();

	productsList.forEach(product => {
		if (!categories.includes(product.category)) categories.push(product.category);
	});

	return promotions[categories.length - 1];
}

function getPrices(productsList, promotion) {
	let totalRegularPrice = 0;
	let totalDiscountValue = 0;

	productsList.forEach(product => {
		totalRegularPrice += product.regularPrice;

		product.promotions.forEach(promo => {
			if (promo.looks.includes(promotion)) {
				if (promo.price != product.regularPrice) {
					totalDiscountValue += product.regularPrice - promo.price;
				}
			}
		});
	});

	const totalPrice = (totalRegularPrice - totalDiscountValue);
	const discountPercentage = ((totalDiscountValue * 100) / totalRegularPrice);

	return { totalPrice: totalPrice.toFixed(2), discountValue: totalDiscountValue.toFixed(2), discountPercentage: `${discountPercentage.toFixed(2)}%` }
}

function getCleanCartList(cartList) {
	cartList.forEach(product => {
		delete product.id;
		delete product.regularPrice;
		delete product.promotions;
	});
}

function getShoppingCart(ids, productsList) {
	const cartList = getProductsById(ids, productsList);
	const promotion = getPromotionName(cartList);
	const prices = getPrices(cartList, promotion);
	getCleanCartList(cartList);

	return {
		products: cartList,
		promotion,
		totalPrice: prices.totalPrice,
		discountValue: prices.discountValue,
		discount: prices.discountPercentage
	};
}

module.exports = { getShoppingCart };
