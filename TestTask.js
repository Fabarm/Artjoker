function bonusSum(promo){

    let promoArray = [],
        statusMessage = [2000, 1000, 100, 0],
        indexPairs = [];

    if(typeof(promo) !== "number"){
        return statusMessage[3];
    }

    for (let i = 0; i = promo; i++ ) {
        promoArray.unshift(promo % 10);
        promo = Math.floor(promo / 10);
    }

    if(promoArray.length !== 8){
        return statusMessage[3];
    }

    for (let i = 0; i < promoArray.length - 1; i++) {
        if (promoArray[i] % 2 && promoArray[i + 1] % 2) {
            indexPairs.push(i, i + 1);
            i++;
        }
    }
    if (indexPairs.length && indexPairs[1] < indexPairs[2] - 1) {
        if (promoArray[indexPairs[0]] < promoArray[indexPairs[1]]
            && promoArray[indexPairs[2]] < promoArray[indexPairs[3]]) {
            return statusMessage[0];
        } else{
            return statusMessage[1];
        }
    }

    function sumEven(arr) {
        let eventSum = arr.filter(item => item % 2 === 0).reduce((a, b) => a + b),
            notEventSum = arr.filter(item => item % 2 !== 0).reduce((a, b) => a + b);

        return eventSum > notEventSum;
    }

    if(sumEven(promoArray)){
        return statusMessage[2];
    }

    return statusMessage[3];
}

console.log(bonusSum(84533920));
console.log(bonusSum(48183276));
console.log(bonusSum(73289388));
console.log(bonusSum(37283988));