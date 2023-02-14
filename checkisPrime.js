function checkIsPrime(num) {
    
    let temp = ''
    let counter = 1
    let start_mod=2
    let count_mod_zero=0
    temp =  Math.floor(Math.sqrt(num))

    for(let i = 0;i<temp;i++){
        console.log(num%start_mod)
        // console.log("this is counter " + counter)
        if(num%start_mod==0){
            start_mod = start_mod+1
            count_mod_zero = count_mod_zero+1
        }else{
            start_mod = start_mod+1
        }
        counter = counter+1
        

       

    }
    if(count_mod_zero==0||num==2){
        if(num==1){
            console.log(false)
        }else{
            console.log(true)
        }
    }else{
        console.log(false)
    }


}


// checkIsPrime(2)
// // returns true
// checkIsPrime(1)

checkIsPrime(11)