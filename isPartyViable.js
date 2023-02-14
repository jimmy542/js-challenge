function isPartyViable(guests) {
    let total = 0
    console.log("total guest " + guests.length)
    if(guests.length>4){
        for(let i  = 0 ; i<guests.length;i++){
            total = total + guests[i].paidForTicket
            console.log(total)
           
        }
        if(total>99){
            console.log("total money more  100 " +total)
            return true
            
        }else{
            console.log('total money less than 100 '+total)
            return false
        }

    }else{
        // console.log(total)
        return false
    }

}

const guests1 = [ 
    { "name": "jim", "paidForTicket": 5 }, 
    { "name": "liam", "paidForTicket": 10 }, 
    { "name": "david", "paidForTicket": 2 },
     { "name": "philippa", "paidForTicket": 3 }, 
     { "name": "kev", "paidForTicket": 12 }, 
     { "name": "sarah", "paidForTicket": 8 },
      { "name": "rose", "paidForTicket": 11 } ]
  
  isPartyViable(guests1);
  // should return false
//   const guests2 = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 2 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//     { name: "kev", paidForTicket: 6 },
//     { name: "sarah", paidForTicket: 11 },
//   ]
//   isPartyViable(guests2);
//   // should return false
//   const guests3 = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 20 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//     { name: "kev", paidForTicket: 26 },
//     { name: "sarah", paidForTicket: 11 },
//   ]
//   isPartyViable(guests3);
//   // should return true