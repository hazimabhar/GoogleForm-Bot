//change the array based on the id on google form

function getAnswerFaiz22(){
    const arr =[
        "17 and below",
        "18 – 22",
        "23 – 26",
        "27 – 30",
        "31 – 36",
        "37 – 42",
        "43 – 48",
        "49 – 53",
        "54 – 58",
        "59 and above",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz22