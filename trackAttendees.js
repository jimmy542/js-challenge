function trackAttendees(person, ticketCost) {
    if(Object.is(person,null)!=true){
        // console.log(person)
        let num = Number(ticketCost)
        person.paidForTicket = num
    }
    console.log(person)
    return person
    }



trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25');
// should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }
trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0');
// should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }
trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13');
// should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }