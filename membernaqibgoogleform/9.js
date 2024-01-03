//change the array based on the id on google form

function getAnswerFaiz9(){
    const arr =[
        "I consider myself to be loyal to this smartphone brand, Strongly Disagree",
        "I consider myself to be loyal to this smartphone brand, Disagree",
        "I consider myself to be loyal to this smartphone brand, Neutral",
        "I consider myself to be loyal to this smartphone brand, Agree",
        "I consider myself to be loyal to this smartphone brand, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz9