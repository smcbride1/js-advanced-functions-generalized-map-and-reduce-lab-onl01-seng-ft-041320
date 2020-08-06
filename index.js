function map(a, func) {
    let newArray = [];
    for (let e of a) {
        newArray.push(func(e));
    }
    return newArray;
}

function reduce(sourceArray, func, startingPoint) {
    let memo;
    let i;
    if (!startingPoint) {
        memo = sourceArray[0];
        i = 1;
    } else {
        memo = startingPoint;
        i = 0;
    }
    for (; i < sourceArray.length; i++) {
        memo = func(sourceArray[i], memo);
    }
    return memo;
}