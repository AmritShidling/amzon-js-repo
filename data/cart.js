export let cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];

export function addToCart(productId){
  let quantity = 1;
  let productFound = null;
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      productFound = cartItem;
    }
  });
  if(productFound){
    productFound.quantity++;
  }
  else{
    cart.push({
      productId,
      quantity
    });
  }

}

export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((item) => {
    if(item.productId !== productId)
      newCart.push(item);
  });
  cart = newCart;
}