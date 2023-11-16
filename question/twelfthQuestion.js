//change the array based on the id on google form

function getAnswer12(){
    const arr =[
        "i48",
        "i51",
        "i54",
        "i57",
        "i60",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer12