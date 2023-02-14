function findFirstOdd(numbers){
    let round=0
    for (let i=0; i < numbers.length; i++) {
        round=round+1
        if(numbers[i]%2==1){
            console.log(numbers[i])
            return numbers[i]
            break
        }
        if(round==numbers.length){
       
            console.log(undefined)
        }
      }
      
}
findFirstOdd([1,4,5])
findFirstOdd([2,4,6])
