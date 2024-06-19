import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/PaymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js'
import { loadCart } from "../data/cart.js";

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('two');
    });
  })
]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });
 
}).then((value)=>{
  return new Promise((resolve)=> {
    loadCart(()=>{
      console.log(value);
      resolve('value2');
      
    });
  });
}).then((value)=>{
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});

*/
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
