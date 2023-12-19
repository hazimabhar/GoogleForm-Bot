//change the array based on the id on google form

function getAnswerFaiz19(){
    const arr =[
        "i195",
        "i198",
        "i201",
        "i204",
        "i207",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz19