// BUILD 'FOR' LOOP

// for(initialization; condition; increment){

//   // IF DIVISIBLE BY 3, LOG "FIZZ"

//   // IF DIVISIBLE BY 5, LOG "BUZZ"

//   // IF DIVISIBLE BY BOTH 3 AND 5, LOG "FIZZBUZZ"

//   // OTHERWISE, PRINT THE NUMBER

// }










    for(let i = 1; i <= 100; i++){

      if (i % 3 === 0 && i % 5 === 0){
        
        console.log('fizzbuzz');

      }
      
      else if(i % 3 === 0){
      
        console.log('fizz')
      
      }
      
      else if(i % 5 === 0){
      
        console.log('buzz')
      
      }


      else if(i % 3 !== 0 && i % 5 !== 0){

        console.log(i)

      }

    }