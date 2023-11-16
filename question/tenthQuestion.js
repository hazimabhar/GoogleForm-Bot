//change the array based on the id on google form

function getAnswer10(){
    const arr =[
        "Column 1, response for Row 4",
        "Column 2, response for Row 4",
        "Column 3, response for Row 4",
        "Column 4, response for Row 4",
        "Column 5, response for Row 4",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer10