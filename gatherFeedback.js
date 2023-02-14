function gatherFeedback(feedbackArray) {

    let positive = gen_num(7,10)
    let negative = gen_num(4,6)
    let neutral = gen_num(0,3)
    let count_positive = 0
    let count_negative = 0
    let count_netral = 0
    let result = []

    for(let i2 = 0;i2<feedbackArray.length;i2++){
        
        if((feedbackArray[i2][1]>=7)&&(feedbackArray[i2][1]<=10)){
            console.log(feedbackArray[i2][1])
        }else if((feedbackArray[i2][1]>=6)&&(feedbackArray[i2][1]<=4)){
            console.log(feedbackArray[i2][1])
            console.log("--")
        }
        
    }
    function gen_num(start,end){
        let data = []
        for(let i = start; i<end+1;i++){
            data.push([i])
        }
        return data    
        }
        
       
        

    
        result.push({positive:count_positive,negative:count_negative,neutral:count_negative})
        console.log(result)
    
}



gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// // returns {positive: 1, negative: 1, neutral:1}
// gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
// // returns {positive: 3, negative: 0, neutral:0}
// gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);