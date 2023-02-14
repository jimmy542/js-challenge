function orderSupplies(supplies, guests) {
    let sub_total = []
    let total = 0
    let keys  = Object.keys(supplies)
    for(let i = 0;i<keys.length;i++){
        console.log(supplies[keys[i]])
        sub_total.push(supplies[keys[i]]*guests)
        total =total+sub_total[i]
    }
    return total
    }



orderSupplies({ cake: 2, iceCream: 7 }, 2);