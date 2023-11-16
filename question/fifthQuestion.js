//change the array based on the id on google form

function getAnswer5(){
    const arr =[
        "Strongly  Disagree, response for Row 3",
        "Disagree, response for Row 3",
        "Neutral, response for Row 3",
        "Agree, response for Row 3",
        "Strongly Agree, response for Row 3",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer5