//change the array based on the id on google form

function getAnswer3(){
    const arr =[
        "Strongly  Disagree, response for test",
        "Disagree, response for test",
        "Neutral, response for test",
        "Agree, response for test",
        "Strongly Agree, response for test",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer3