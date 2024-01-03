//change the array based on the id on google form

function getAnswerFaiz26(){
    const arr =[
        "Less than RM2,560",
        "RM2,560 – RM3,439",
        "RM3,440 – RM4,309",
        "RM4,310 – RM5,249",
        "RM5,250 – RM6,339",
        "RM6,340 – RM7,689",
        "RM7,690 – RM9,449",
        "RM9,450 – RM11,819",
        "RM11,820 – RM15,869",
        "RM15,870 and above",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz26