function calculateTaxiFare(seconds) {
    // second to mins
    // console.log(seconds)
    let min_second = seconds/60
    let min=Math.ceil(min_second)

    console.log(min)
    if(min==3){
        return 500
    }else if(min>3){
        let extra=(min-3)
        let sub_extra=extra*70
        console.log(sub_extra+500)
    }
    }

    calculateTaxiFare(150);
// should return 500
calculateTaxiFare(360);
// should return 710
calculateTaxiFare(491);