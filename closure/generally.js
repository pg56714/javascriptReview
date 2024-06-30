async function getUserDiscounts() {
  return {
    P001: 5,
    P002: 10,
  };
}

async function getCategoryDiscounts() {
  return {
    electronics: 15,
    clothing: 5,
  };
}

function processProducts(products, userDiscounts, categoryDiscounts) {
  return products
    .map((product) => {
      const userDiscount = userDiscounts[product.id] || 0; // Specific discount for the product for this user
      const categoryDiscount = categoryDiscounts[product.category] || 0; // Discount for the product category

      const totalDiscount = userDiscount + categoryDiscount;
      const finalPrice = product.price - product.price * (totalDiscount / 100);

      return {
        ...product,
        finalPrice: finalPrice.toFixed(2),
      };
    })
    .filter((product) => product.finalPrice <= 80)
    .map((product) => product.id);
}

async function main() {
  // List of products with their categories and base prices
  const products = [
    { id: "P001", category: "electronics", price: 100 },
    { id: "P002", category: "clothing", price: 50 },
    { id: "P003", category: "electronics", price: 100 },
    { id: "P004", category: "clothing", price: 80 },
  ];

  const userDiscounts = await getUserDiscounts();
  const categoryDiscounts = await getCategoryDiscounts();

  const processedProducts = processProducts(
    products,
    userDiscounts,
    categoryDiscounts
  );

  console.log(processedProducts);
}

main();
