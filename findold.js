function findOldestPerson(people) {
    let data = []
    let name = []
    if(people!=null){
        for(let i =0;i<people.length;i++){
            data.push(people[i].age)
            name.push(people[i].name)
        }
    }else{
        return 'no people found'
    }
    
    console.log(data)
    
}

findOldestPerson([
    { name: 'Liam', age: 28 },
    { name: 'Eli', age: 37 },
    { name: 'Poonam', age: 22 },
    { name: 'Cameron', age: 32 }
  ]);