function makeGuestList(person) {
    let r = " "
    let firstName=''
    let lastName=''
    let rdata=[]
    let data = person.name.match(r)
    let name = person.name
    firstName = name.substring(0, name.indexOf(' '))
    lastName = name.substring(data['index']+1)
    rdata['firstName']=firstName
    rdata['lastName'] = lastName
    if(person.age!=undefined){
        rdata['age'] = person.age
    }
    
    let str = JSON.stringify(person);
    str = str.replace('name', 'firstName')
    person = JSON.parse(str);
    person.firstName = rdata['firstName']
    person.lastName = rdata['lastName']

    

    console.log(person)
    return person
    
    }

    makeGuestList({ name: "Hannah Fry", age: 46 });
// should return { firstName: "Hannah", lastName: "Fry", age: 46 }
makeGuestList({ name: "Paul Erdős", age: 46 });