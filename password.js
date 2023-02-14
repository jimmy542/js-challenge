function retrievePassword(user) {
    if(user.password==undefined){
        return undefined
    }else{
        return user.password
    }
   }


   retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' })
   retrievePassword({ name: 'Sam', password: 'hi!' })
   retrievePassword({ name: 'Halima', favouriteFood: 'pizza' })