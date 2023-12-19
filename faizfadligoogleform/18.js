//change the array based on the id on google form

function getAnswerFaiz18(){
    const arr =[
        "i176",
        "i179",
        "i182",
        "i185",
        "i188",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz18