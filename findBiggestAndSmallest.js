function findBiggestAndSmallest(numbers) {


    numbers.sort(function(a, b){return a - b})
    if(numbers.length!=0){
        console.log({'biggest':numbers[numbers.length-1],"smallest":numbers[0]})
        return {'biggest':numbers[numbers.length-1],"smallest":numbers[0]}
    }else if(numbers.length==1){
        console.log({'biggest':numbers[0],"smallest":numbers[0]})
        return {'biggest':numbers[0],"smallest":numbers[0]}
    }else{
        console.log([])
        return {}
    }
    
    }



    findBiggestAndSmallest([1, 2, 99, 100])
    findBiggestAndSmallest([5])