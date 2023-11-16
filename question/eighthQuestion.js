//change the array based on the id on google form

function getAnswer8(){
    const arr =[
        "Column 1, response for Row 2",
        "Column 2, response for Row 2",
        "Column 3, response for Row 2",
        "Column 4, response for Row 2",
        "Column 5, response for Row 2",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer8