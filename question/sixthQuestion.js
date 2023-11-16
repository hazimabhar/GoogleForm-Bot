//change the array based on the id on google form

function getAnswer6(){
    const arr =[
        "Strongly  Disagree, response for Row 4",
        "Disagree, response for Row 4",
        "Neutral, response for Row 4",
        "Agree, response for Row 4",
        "Strongly Agree, response for Row 4",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer6