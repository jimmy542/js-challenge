function retrieveKey(object, key) {
    // console.log(object[key])
    if(object[key]==undefined){
        return undefined
    }else{
        return object[key]
    }
    // if(Object.keys(object)[0]==key){
    //     console.log(object[key])
    // }else{
    //     console.log(undefined)
    // }
    

  }


  retrieveKey({ name: 'Sam' }, 'name');
// returns 'Sam'
retrieveKey({ password: 'Chips!' }, 'password');
// returns 'Chips!'
  retrieveKey({ name: 'Sam' }, 'age');