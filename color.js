var numCols = 12;
var lower = 50;
var usedValues = [];

(function setColors() {
    let upper = getRndInteger(lower, 255 - numCols);
    let redGreenOrBlue = getRndInteger(0, 3)

    for (var i = 1; i < numCols + 1; i++) {
        let rgbValue = constructRGB(getUniqueRndInteger(upper - numCols * 2, upper), redGreenOrBlue)
        idString = "#" + i
        $(idString).css("background-color", rgbValue);
    }
})();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getUniqueRndInteger(min, max){
    let newValue = getRndInteger(min, max)

    if ($.inArray(newValue, usedValues) != -1) {
        return getUniqueRndInteger(min, max)
    } else {
        usedValues.push(newValue)
        return newValue
    }
}

function constructRGB(value, rgorb) {
    let rgb = [];
    let otherVals = 150
    let transparency = 0.9

    rgb.push("rgb(", value, ",", otherVals, ",", otherVals, ",", transparency);
    
    switch (rgorb) {
        case(1): console.log("case1"); rgb[3] = value; rgb[1] = otherVals; break;
        case(2): console.log("case2"); rgb[5] = value; rgb[1] = otherVals;
    }

    return rgb.join("");
}