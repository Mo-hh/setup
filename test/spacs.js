const assert =require('assert');
const factory =require('../scripts/index.js');


// describe(`My suite`, () =>{
//
// describe (`just a test`, ()=>{
//
// it(`should return true`,()=>{
//   assert.equal(5,5);
// })
//
// })
//
//
// })

describe('Testing all files',()=>{

describe('convert function',()=>{

it('string to number',()=>{

const actaualResult = factory.convert('7');
const expectedResult=7;
assert.strictEqual(actaualResult,expectedResult);

})

})

describe('reverse the string',()=>{


it('the string is possible to reverse',()=>{

  const actaualResult= factory.reverse('mohamad');
  const expectedResult='damahom';
  assert.strictEqual(actaualResult,expectedResult);
})

})



it('Error for the input is not string!!',()=>{

  const actaualResult= factory.reverse(44444);
  const expectedResult=false;
  assert.strictEqual(actaualResult,expectedResult);
})



})
