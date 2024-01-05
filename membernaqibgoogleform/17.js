//change the array based on the id on google form

function getAnswerFaiz17(){
    const arr =[
        "Yes",
        "No",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz17