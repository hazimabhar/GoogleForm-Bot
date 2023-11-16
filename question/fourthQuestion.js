//change the array based on the id on google form

function getAnswer4(){
    const arr =[
        "Strongly  Disagree, response for Row 2",
        "Disagree, response for Row 2",
        "Neutral, response for Row 2",
        "Agree, response for Row 2",
        "Strongly Agree, response for Row 2",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer4