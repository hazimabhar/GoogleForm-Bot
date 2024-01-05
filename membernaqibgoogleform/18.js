//change the array based on the id on google form

function getAnswerFaiz18(){
    const arr =[
        "Male",
        "Female",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz18