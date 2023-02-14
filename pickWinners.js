function pickWinners(numbers) {
    let winner = []
    for (let i = 0;i<numbers.length;i++){
        if(i%2==1&&numbers[i]%2==1){
            winner.push({seat:[i],ticketCost:numbers[i]})
        }
    }
    console.log(winner)
    return winner
}

pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
pickWinners([1, 6, 13, 8, 29, 50])
// should return []