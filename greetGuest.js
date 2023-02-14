function greetGuest(name) {
    if(name!=null){
    let guest=name.charAt(0).toUpperCase()+name.slice(1)
    console.log("Hello "+guest+"!")
    return "Hello "+guest+"!"
    }else{
        console.log("Hello" + "!")
        return "Hello"
    }
}


    greetGuest()