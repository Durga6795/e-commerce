document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-name");
      const productPrice = button.getAttribute("data-price");

      const product = {
        name: productName,
        price: parseInt(productPrice, 10),
        quantity: 1,
      };

      const existingProductIndex = cart.findIndex(
        (item) => item.name === product.name
      );
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push(product);
      }

      console.log(cart);
      alert(`${productName} has been added to your cart.`);
    });
  });
});
