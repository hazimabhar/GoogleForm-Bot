//change the array based on the id on google form

function getAnswer2(){
    const arr =[
        "1",
        "2",
        "3",
        "4",
        "5",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer2