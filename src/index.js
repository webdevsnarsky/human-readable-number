const numsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety'];
module.exports = function toReadable (number) {
          let result;
          let  hundreds = '';
          let tens = '';
          let num = '';

          if (number == 0) {
            return 'zero';
          }
          if (number <= 99) { 
            if (number >= 11 && number <= 19) {
                numsArr.forEach( (elem, i) => {((i+1) == number) ? tens = elem : ''});
              result = `${tens}`;
            } else if (String(number).split('').pop() == 0) {
              tensArr.forEach( (elem, i) => {((i+1) == Math.floor( number / 10)) ? tens = elem : ''});
              result = `${tens}`;
            } else {
                 tensArr.forEach( (elem, i) => {((i+1) == Math.floor( number / 10)) ? tens = elem : ''});
                 numsArr.forEach( (elem, i) => {((i+1) == String(number).split('').pop()) ? num = elem : ''});
                 result = `${tens} ${num}`;
            }
         
          }
          
        if (number >= 100) {
          numsArr.forEach( (elem, i) => {((i+1) == Math.floor( number / 100 )) ? hundreds = elem : ''}); 

          if (String(number).split('').splice(1,2).join('') < 20) {

            if (String(number).split('').pop() !== 0) {
                numsArr.forEach( (elem, i) => {((i+1) == String(number).split('').splice(1,2).join('')) ? tens = elem : ''});
                result = `${hundreds} hundred ${tens}`; 
            } else {
                numsArr.forEach( (elem, i) => {((i+1) == String(number).split('').splice(1,2).join('')) ? tens = elem : ''});
                result = `${hundreds} hundred ${tens} ${num}`; 
            }
          }

          if (String(number).split('').splice(1,2).join('') >= 20) {
            numsArr.forEach( (elem, i) => {((i+1) == String(number).split('').pop()) ? num = elem : ''});
            tensArr.forEach( (elem, i) => {((i+1) == String(number).split('').splice(1,1)) ? tens = elem : ''});
            result = `${hundreds} hundred ${tens} ${num}`; 
          }
        }

        return result.trim();
  }
  


