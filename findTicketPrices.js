function findTicketPrices(emailString) {
    let r = /\d+/
    let data=""
    console.log(emailString.match(r))
    data = emailString.match(r)
    for(var propName in data) {
        if(data.hasOwnProperty(propName)) {
            var propValue = data[propName];
            console.log(propValue)
        }
    }
    // if(data.length!=null){
    //     console.log(true)
    // }else{
    //     console.log(false)
    // }
    }


    findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
    findTicketPrices("Thanks for making this event pay what you can afford!");
