let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`${item} added to your cart!`);
}
