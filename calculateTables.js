function calculateTables(guests, seats) {


    let g_mode = guests%seats
    let total_t = Math.floor(guests/seats)
   console.log({ tables: total_t , remainingGuests: g_mode })
    
}



calculateTables(4, 2);
// should return { tables: 2 , remainingGuests: 0 }
calculateTables(14, 6);
// should return { tables: 2 , remainingGuests: 2 }
calculateTables(26, 5);
// should return { tables: 5 , remainingGuests: 1 }