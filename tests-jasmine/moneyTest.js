import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('Converts cents to doller', ()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to a nearest cent', ()=>{
    expect(formatCurrency(1000.5)).toEqual('10.01');
  });

  it('Rounds down to a nearest cent', ()=> {
    expect(formatCurrency(1000.4)).toEqual('10.00');
  });
});
