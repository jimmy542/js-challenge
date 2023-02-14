function findEvenLengthStrings(items) {
    let counter = 0
    let data=[]
      if(items.length==0){
         console.log([])
         return []
      
      }else{
      for (let i = 0; i < items.length; i++) {
         counter = counter+1
         if(typeof items[i]==='string'||items[i] instanceof String){
            if(items[i].length%2==0){
               data.push(items[i])
            }
   
         }
         if(counter==items.length){
            console.log(data)
            if(data.length==0){
               return []
            }else{
               return data
            }
         }
      }
   }
}

findEvenLengthStrings(['hi', 'bye'])
// returns ['hi']
findEvenLengthStrings(['bye'])
// returns []
findEvenLengthStrings(['keepOnlyMe', 'notMe', 4])

findEvenLengthStrings([])
// returns ['keepOnlyMe']
findEvenLengthStrings([ 'hi', 'cool' ])
