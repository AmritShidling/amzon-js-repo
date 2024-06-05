import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suit: format currency');
console.log('Converts cents to doller');
if(formatCurrency(2095) === '20.95'){
  console.log('Passed');
} else {
  console.log('failed');
}

console.log('Works for 0');
if(formatCurrency(0) === '0.00'){
  console.log('Passed');
} else {
  console.log('failed');
}

console.log('Rounds to nearest next value');
if(formatCurrency(2000.5) === '20.01'){
  console.log('Passed');
} else {
  console.log('failed');
}

console.log('Rounds to nearest previous value');
if(formatCurrency(2000.4) === '20.00'){
  console.log('Passed');
} else {
  console.log('failed');
}