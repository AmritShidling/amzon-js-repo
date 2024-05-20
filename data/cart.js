export const cart = [];


export function addToCart(productId){
  let quantity = 1;
  let productFound = null;
  cart.forEach((item) => {
    if(item.productId === productId){
      productFound = item;
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