//change the array based on the id on google form

function getAnswerFaiz29(){
    const arr =[
        "Less than RM 1,000",
        "RM 1,001 to RM 2,500 ",
        "More than RM 2,500",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz29